import axios from "axios";

const EndPoint_Url = import.meta.env.ENDPOINT_URL;

const http = axios.create({
  baseURL: EndPoint_Url,
  headers: {
    "Content-type": "application/json",
  },
});

export default http;
