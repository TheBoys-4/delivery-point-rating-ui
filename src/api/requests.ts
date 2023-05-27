import axios from "axios";
import { BASE_URL } from "../const/base";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const getMessages = () => {
  return instance.get("messages").then((res) => res.data);
};

export const getLocations = () => {
  return instance.get("locations").then((res) => res.data);
};

export const getVendors = () => {
  return instance.get("vendors").then((res) => res.data);
};

export const sendComment = (data: any) => {
  return instance.post("messages", data);
};
