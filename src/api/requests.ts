import axios from "axios";
import { BASE_URL } from "../shared/constants";
import { DOMAIN } from "../shared/constants/urls";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? BASE_URL.replace('http://87.242.124.151:8080', DOMAIN) : BASE_URL,
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
