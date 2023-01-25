import { createContext, ReactNode, useMemo, useState } from "react";

interface AppContextProps {
  pathUrl: string;
  setPathUrl: (pathUrl: string) => void;
  isLogin: string | boolean;
}

export const AppContext = createContext<AppContextProps>({
  pathUrl: "",
  setPathUrl: () => {},
  isLogin: false,
});

interface ChildrenProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: ChildrenProps) {
  const [pathUrl, setPathUrl] = useState<string>(window.location.pathname);
  const isLogin = sessionStorage.getItem("access_token") ?? false;

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
