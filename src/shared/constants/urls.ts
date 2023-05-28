export const BASE_URL =
    process.env.NODE_ENV === 'development' ?
        `http://localhost:${process.env.REACT_APP_PORT}/api/delivery-point-rating/data-service/`
        : `http://87.242.124.151:8080/api/delivery-point-rating/data-service/`;
