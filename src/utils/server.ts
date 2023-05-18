import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost",
  timeout: 10000,
});

export default server;
