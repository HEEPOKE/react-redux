import axios from "axios";

const http = axios.create({
  // baseURL: process.env.BASE_BACKEND_URL,
  baseURL: "http://localhost:6476",
  headers: {
    "Content-type": "application/json",
  },
});

export default http;