import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import GetUserResponse from "../models/Response/UserResponse";
import UserRequest from "../models/Request/UserRequest";

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
  Show: boolean;
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
  Show: false,
  setShow: (value: boolean) => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: ChildrenProps) {
  const [User, setUser] = useState<GetUserResponse[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [Show, setShow] = useState(false);

  const reGetUser = useMemo(
    () => () => {
      // UserServices.getUser().then((res) => {
      //   setUser(res.data);
      // });
    },
    []
  );

  //   const insertUser = useMemo(
  //     () => (data: any) => {
  //       UserServices.insertUser(data)
  //         .then((res) => {
  //           AlertSuccess(res.data.message);
  //           reGetUser();
  //         })
  //         .catch((err) => {
  //           AlertError(err.response.data.message);
  //         });
  //     },
  //     [reGetUser]
  //   );

  const clearInputValue = () => {
    setShow(false);
  };

  const handlerSubmit = useMemo(
    () => () => {
      const baseInsert: UserRequest = {};

      setShow(true);
      // insertUser(camelToSnakeObject(baseInsert));
      clearInputValue();
    },
    [insertUser]
  );

  useEffect(() => {
    UserServices.getUser()
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((err: any) => {
        // AlertError(err.response.data.message);
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
    ]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
