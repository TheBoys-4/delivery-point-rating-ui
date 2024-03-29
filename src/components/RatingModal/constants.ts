import { CommentExamples, Product } from "../../shared/types";

export const productList: Product[] = [
  {
    id: "1",
    imgSrc: "https://ir.ozone.ru/s3/multimedia-s/wc700/6544193344.jpg",
    productDescription:
      "Kidz Крепкий иммунитет, комплекс витаминов для повышения иммунитета, 14 стиков по 13 г, для детей с 3 лет",
  },
  {
    id: "2",
    imgSrc: "https://ir.ozone.ru/multimedia/wc700/1017986655.jpg",
    productDescription: "Стиль Жизни Настольная игра Спящие Королевы",
  },
  {
    id: "3",
    imgSrc: "https://ir.ozone.ru/s3/multimedia-w/wc750/6315911228.jpg",
    productDescription: "Пижама Fun Time",
  },
];

export const commentExamples: CommentExamples = {
  1: [
    "Плохое описание.",
    "Не смог выбрать нужный постамат.",
    "Не смог оплатить с банка X.",
    "Не было упаковки.",
    "Качество не соответствует описанию на сайте.",
    "Постамат не работает.",
    "Доставка сильно задержалась.",
  ],
  2: [
    "Описание не соответствует.",
    "Были проблемы с выбором постамата.",
    "Были проблемы с оплатой.",
    "Помятая упаковка.",
    "Качество не соответствует описанию на сайте.",
    "Были проблемы с постаматом.",
    "Доставка задержалась.",
  ],
  3: [
    "Описание частично соответствует.",
    "Не смог выбрать нужный постамат.",
    "Незначительные проблемы с оплатой.",
    "Царапины на упаковке.",
    "Качество не соответствует описанию на сайте.",
    "Подвисания постамата.",
    "Доставка незначительно задержалась.",
  ],
  4: [
    "Описание практически соответствует.",
    "Удобное расположение постамата.",
    "Разные варианты оплаты товара.",
    "Хорошая упаковка.",
    "Качество соответствует описанию на сайте.",
    "Хорошая работа постамата.",
    "Доставка уложилась в заявленные сроки.",
  ],
  5: [
    "Описание полностью соответствует.",
    "Постомат расположен в моем доме.",
    "Быстрая и удобная оплата.",
    "Отличная упаковка.",
    "Качество полностью соответствует описанию на сайте.",
    "Отличная работа постамата.",
    "Доставили раньше заявленных сроков.",
  ],
};
