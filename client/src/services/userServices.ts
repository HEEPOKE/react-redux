import http from "../http";
import getToken from "../http/GetToken";
import GetUserResponse from "../models/Response/UserResponse";

const getUser = () => {
  return http.get<GetUserResponse[]>(`api/users/list`, { headers: getToken() });
};

const addUser = (payload: any) => {
  return http.post(`api/users/add`, payload, { headers: getToken() });
};

const userServices = { getUser, addUser };

export default userServices;
