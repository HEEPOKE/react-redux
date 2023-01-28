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

  const AccessTokenExp = () => {
    const expiration = sessionStorage.getItem("tokenExp") ?? false;
    const currentTime = Date.now().valueOf() / 1000;

    if (!expiration) {
      return false;
    }
    return Number(currentTime) > Number(expiration);
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
              sessionStorage.setItem("Authorization", res.access_token);
              sessionStorage.setItem("tokenExp", res.tokenExp);
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
