import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import LoginRequest from "../../models/Request/LoginRequest";
import authServices from "../../services/authServices";
import AuthUtils from "../../utils/authSwal";

interface ChildrenProps {
  children: ReactNode;
}
interface LoginContextProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handlerSubmit: () => void;
}

export const LoginContext = createContext<LoginContextProps>({
  email: "",
  setEmail: (value: string) => {},
  password: "",
  setPassword: (value: string) => {},
  handlerSubmit: () => {},
});

export function LoginContextProvider({ children }: ChildrenProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Login = useMemo(
    () => (payload: any) => {
      authServices
        .login(payload)
        .then((res: any) => {
          const token = res.data.Authorization;
          const refresh_token = res.data.refreshToken;
          const token_exp = res.data.token_exp;

          sessionStorage.setItem("Authorization", token);
          sessionStorage.setItem("refresh_token", refresh_token);
          sessionStorage.setItem("token_exp", token_exp);

          let message = "เข้าสู่ระบบสำเร็จ กด Go เพื่อเข้าสู่ระบบ";

          AuthUtils.LoginSwal(message);
        })
        .catch((err: any) => {
          console.log(err);
        });
    },
    []
  );

  const handlerSubmit = useMemo(
    () => () => {
      const baseInsert: LoginRequest = {
        email,
        password,
      };

      Login(baseInsert);
    },
    [email, password]
  );

  const AccessTokenExp = () => {
    const expiration = sessionStorage.getItem("token_exp");
    const currentTime = Date.now().valueOf() / 1000;

    return Number(currentTime) > Number(expiration);
  };

  useEffect(() => {
    if (AccessTokenExp()) {
      const access_token = sessionStorage.getItem("Authorization") ?? false;

      if (!access_token) {
        console.log("====================================");
        console.log("false");
        console.log("====================================");
      } else {
        authServices.refreshToken(access_token);
      }
    }
  }, []);

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      handlerSubmit,
    }),
    [email, setEmail, password, setPassword, handlerSubmit]
  );

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}
