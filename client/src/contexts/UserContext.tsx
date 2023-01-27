import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import GetUserResponse from "../models/Response/GetUserResponse";
import UserRequest from "../models/Request/UserRequest";
import userServices from "../services/userServices";

interface ChildrenProps {
  children: ReactNode;
}
interface UserContextProps {
  user: GetUserResponse[];
  setUser: (value: GetUserResponse[]) => void;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  handlerSubmit: () => void;
  reGetUser: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: [],
  setUser: (value: GetUserResponse[]) => {},
  firstName: "",
  setFirstName: (value: string) => {},
  lastName: "",
  setLastName: (value: string) => {},
  email: "",
  setEmail: (value: string) => {},
  role: "",
  setRole: (value: string) => {},
  handlerSubmit: () => {},
  reGetUser: () => {},
});

export function UserContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<GetUserResponse[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const reGetUser = useMemo(
    () => () => {
      userServices.getUser().then((res: any) => {
        setUser(res.data);
      });
    },
    []
  );

  const addUser = useMemo(
    () => (payload: any) => {
      userServices
        .addUser(payload)
        .then((res: any) => {
          reGetUser();
        })
        .catch((err: any) => {
          // AlertError(err.response.payload.message);
        });
    },
    [reGetUser]
  );

  const clearInputValue = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("");
  };

  const handlerSubmit = useMemo(
    () => () => {
      const baseInsert: UserRequest = {
        firstName,
        lastName,
        email,
        role,
      };

      addUser(baseInsert);
      clearInputValue();
    },
    [firstName, lastName, email, role, addUser]
  );

  useEffect(() => {
    userServices
      .getUser()
      .then((res: any) => {
        setUser(res.data.payload);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      role,
      setRole,
      handlerSubmit,
      reGetUser,
    }),
    [
      user,
      setUser,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      role,
      setRole,
      handlerSubmit,
      reGetUser,
    ]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
