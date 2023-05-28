import jsonServerProvider from 'ra-data-json-server';
import { BASE_URL } from "../../shared/constants/urls";

const url = BASE_URL.slice(0, -1);

export const dataProvider = jsonServerProvider(url);