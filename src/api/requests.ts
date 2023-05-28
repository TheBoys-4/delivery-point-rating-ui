import axios from "axios";
import { BASE_URL } from "../shared/constants";

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

export const getXlsx = () => {
  instance.get('export/xlsx', { responseType: 'blob' }).then((res) => {
      const href = URL.createObjectURL(res.data);

      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', 'file.xlsx');
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
  })
}