import http from "../http";

const login = (payload: any) => {
  return http.post(`api/auth/login`, payload);
};

const register = (payload: any) => {
  return http.post(`api/auth/register`, payload);
};

const authServices = { login, register };

export default authServices;
