import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import authServices from "../services/authServices";

interface ChildrenProps {
  children: ReactNode;
}

interface AppContextProps {
  pathUrl: string;
  setPathUrl: (pathUrl: string) => void;
  isLogin: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  pathUrl: "",
  setPathUrl: () => {},
  isLogin: "",
  isLoading: false,
  setIsLoading: () => {},
});

export function AppContextProvider({ children }: ChildrenProps) {
  const [pathUrl, setPathUrl] = useState<string>(window.location.pathname);
  const [isLoading, setIsLoading] = useState(false);
  const isLogin = sessionStorage.getItem("Authorization") ?? "";

  const AccessTokenExp = (): boolean => {
    const tokenExp = sessionStorage.getItem("tokenExp") ?? false;

    if (!tokenExp) {
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const expTime = Number(tokenExp);

    if (expTime - currentTime > 3600) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (AccessTokenExp()) {
        setIsLoading(true);
        const access_token = sessionStorage.getItem("Authorization") ?? false;
        if (!access_token) {
          setIsLoading(false);
          console.log("false");
        } else {
          authServices
            .refreshToken(access_token)
            .then((res: any) => {
              const Authorization = res.payload.Authorization;
              const TokenExp = res.payload.Token_Exp;

              sessionStorage.setItem("Authorization", Authorization);
              sessionStorage.setItem("tokenExp", TokenExp);
              setIsLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const values = useMemo(
    () => ({
      pathUrl,
      setPathUrl,
      isLogin,
      isLoading,
      setIsLoading,
    }),
    [pathUrl, setPathUrl, isLogin, isLoading, setIsLoading]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
