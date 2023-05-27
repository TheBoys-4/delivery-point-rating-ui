import axios from "axios";
import { BASE_URL } from "../const/base";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getMessages = () => {
  return instance.get("messages");
};
