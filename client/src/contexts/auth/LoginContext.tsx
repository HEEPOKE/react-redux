import { createContext, ReactNode, useMemo, useState } from "react";
import LoginRequest from "../../models/Request/LoginRequest";
import authServices from "../../services/authServices";

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

  const clearInputValue = () => {
    setEmail("");
    setPassword("");
  };

  const Login = useMemo(
    () => (payload: any) => {
      authServices
        .login(payload)
        .then((res: any) => {
          clearInputValue();
        })
        .catch((err: any) => {
          // AlertError(err.response.payload.message);
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
