import { createContext, ReactNode, useMemo, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface AppContextProps {
  pathUrl: string;
  setPathUrl: (pathUrl: string) => void;
  isLogin: string;
}

export const AppContext = createContext<AppContextProps>({
  pathUrl: "",
  setPathUrl: () => {},
  isLogin: "",
});

export function AppContextProvider({ children }: ChildrenProps) {
  const [pathUrl, setPathUrl] = useState<string>(window.location.pathname);
  const isLogin = sessionStorage.getItem("access_token") ?? "";

  const values = useMemo(
    () => ({
      pathUrl,
      setPathUrl,
      isLogin,
    }),
    [pathUrl, setPathUrl, isLogin]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
