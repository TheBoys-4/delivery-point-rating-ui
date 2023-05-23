import {CommentExamples, Product} from "../../shared/types";

export const productList: Product[] = [
    {
        id: '1',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-s/wc700/6544193344.jpg',
        productDescription: 'Kidz Крепкий иммунитет, комплекс витаминов для повышения иммунитета, 14 стиков по 13 г, для детей с 3 лет',
    },
    {
        id: '2',
        imgSrc: 'https://ir.ozone.ru/multimedia/wc700/1017986655.jpg',
        productDescription: 'Стиль Жизни Настольная игра Спящие Королевы',
    },
    {
        id: '3',
        imgSrc: 'https://ir.ozone.ru/s3/multimedia-w/wc750/6315911228.jpg',
        productDescription: 'Пижама Fun Time',
    }
]

export const commentExamples: CommentExamples = {
    1: ['Ужасное качество', 'Пришло сломанное', 'Воняет и грязное'],
    2: ['Пришло сломанное', 'Не понравился матерьял', 'Воняет'],
    3: ['Не понравился цвет', 'Не понравился запах', 'Маленькая комплектация'],
    4: ['Хорошее качество', 'Понравился матерьял', 'Понравился цвет'],
    5: ['Отличный товар', 'Все понравилось', 'Буду заказывать ещё']
}