import { createContext, ReactNode, useMemo, useState } from "react";
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

          sessionStorage.setItem("Authorization", token);
          sessionStorage.setItem("refresh_token", refresh_token);

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
