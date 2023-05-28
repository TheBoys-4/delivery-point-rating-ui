import jsonServerProvider from 'ra-data-json-server';
import { DOMAIN } from "../../shared/constants/urls";

const url = process.env.NODE_ENV === 'development' ?
        `http://87.242.124.151:3000/api/delivery-point-rating/data-service` :
        `${DOMAIN}/api/delivery-point-rating/data-service`;

export const dataProvider = jsonServerProvider(url);