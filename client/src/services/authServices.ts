import http from "../http";

const login = (payload: any) => {
  return http.post(`api/auth/login`, payload);
};

const authServices = { login };

export default authServices;
