import { createContext, ReactNode, useMemo, useState } from "react";
import RegisterRequest from "../../models/Request/RegisterRequest";
import authServices from "../../services/authServices";
import ValidateUtils from "../../utils/ValidateSwal";

interface ChildrenProps {
  children: ReactNode;
}
interface RegisterContextProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  handlerSubmit: (e: any) => void;
}

export const RegisterContext = createContext<RegisterContextProps>({
  firstName: "",
  setFirstName: (value: string) => {},
  lastName: "",
  setLastName: (value: string) => {},
  email: "",
  setEmail: (value: string) => {},
  password: "",
  setPassword: (value: string) => {},
  confirmPassword: "",
  setConfirmPassword: (value: string) => {},
  handlerSubmit: (e: any) => {},
});

export function RegisterContextProvider({ children }: ChildrenProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearInputValue = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const Register = useMemo(
    () => (payload: any) => {
      authServices
        .register(payload)
        .then((res: any) => {
          clearInputValue();

          const accessToken = res.data.access_token;
          sessionStorage.setItem("access_token", accessToken);
        })
        .catch((err: any) => {
          console.log(err);
        });
    },
    []
  );

  const handlerSubmit = useMemo(
    () => (e: any) => {
      e.preventDefault();

      const baseInsert: RegisterRequest = {
        firstName,
        lastName,
        email,
        password,
      };

      if (confirmPassword != password) {
        let message = "รหัสผ่านไม่ตรงกัน";
        ValidateUtils.ErrorMessage(message);
      } else if (password.length < 8 || password.length > 20) {
        let message = "รหัสผ่านควรมีความยาว 8-20 ตัว";
        ValidateUtils.ErrorMessage(message);
      } else if (firstName === "" || lastName === "" || email === "") {
        let message = "กรอกข้อมูลไม่ครบถ้วน";
        ValidateUtils.ErrorMessage(message);
      } else {
        Register(baseInsert);
      }
    },
    [firstName, lastName, email, password, confirmPassword]
  );

  const values = useMemo(
    () => ({
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      handlerSubmit,
    }),
    [
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      handlerSubmit,
    ]
  );

  return (
    <RegisterContext.Provider value={values}>
      {children}
    </RegisterContext.Provider>
  );
}
