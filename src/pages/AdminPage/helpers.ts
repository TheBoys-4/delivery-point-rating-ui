import jsonServerProvider from 'ra-data-json-server';
import { DOMAIN } from "../../shared/constants/urls";

const url = process.env.NODE_ENV === 'development' ?
        `http://localhost:${process.env.REACT_APP_PORT}/api/delivery-point-rating/data-service` :
        `${DOMAIN}/api/delivery-point-rating/data-service`;

export const dataProvider = jsonServerProvider(url);