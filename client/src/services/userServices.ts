import http from "../http";
import GetUserResponse from "../models/Response/UserResponse";

const getUser = () => {
  return http.get<GetUserResponse[]>(`api/users/get`);
};

const addUser = (payload: any) => {
  return http.post(`api/users/add`, payload);
};

const userServices = { getUser, addUser };

export default userServices;
