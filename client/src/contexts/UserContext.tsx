import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import GetUserResponse from "../models/Response/UserResponse";
import UserRequest from "../models/Request/UserRequest";
import userServices from "../services/userServices";

interface ChildrenProps {
  children: ReactNode;
}
interface UserContextProps {
  User: GetUserResponse[];
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
  show: boolean;
  setShow: (value: boolean) => void;
}

export const UserContext = createContext<UserContextProps>({
  User: [],
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
  show: false,
  setShow: (value: boolean) => {},
});

export function UserContextProvider({ children }: ChildrenProps) {
  const [User, setUser] = useState<GetUserResponse[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [show, setShow] = useState(false);

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
    setShow(false);
  };

  const handlerSubmit = useMemo(
    () => () => {
      const baseInsert: UserRequest = {
        firstName,
        lastName,
        email,
        role,
      };

      setShow(true);
      addUser(baseInsert);
      clearInputValue();
    },
    [firstName, lastName, email, role, addUser]
  );

  useEffect(() => {
    userServices
      .getUser()
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const values = useMemo(
    () => ({
      User,
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
      show,
      setShow,
    }),
    [
      User,
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
      show,
      setShow,
    ]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
