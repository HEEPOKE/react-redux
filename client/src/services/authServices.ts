import http from "../http";

const login = (payload: any) => {
  return http.post(`api/auth/login`, payload);
};

const register = (payload: any) => {
  return http.post(`api/auth/register`, payload);
};

const refreshToken = (token: string) => {
  return http.post(`api/auth/refreshToken`, token);
};

const authServices = { login, register, refreshToken };

export default authServices;
