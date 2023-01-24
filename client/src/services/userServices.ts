import http from "../http";
import GetUserResponse from "../models/Response/UserResponse";

const getUser = () => {
  return http.get<GetUserResponse[]>(`api/users/get`);
};

const userServices = { getUser };

export default userServices;
