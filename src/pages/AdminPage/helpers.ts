import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(`http://localhost:${process.env.REACT_APP_PORT}/api/delivery-point-rating/data-service/`);