import React, { useEffect, useRef, useState } from "react";
import {
  Space,
  Image,
  Input,
  Rate,
  Tag,
  Button,
  RateProps,
  notification,
} from "antd";
import {
  SmileOutlined,
  ExclamationCircleOutlined,
  FrownOutlined,
  MehOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "./RatingModal.scss";
import { commentExamples, productList } from "./constants";
import { randomIntFromInterval } from "../../shared/helpers";
import {
  getLocations,
  getMessages,
  getVendors,
  sendComment,
} from "../../api/requests";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const RateCharacter: RateProps["character"] = ({ index }) => {
  return customIcons[typeof index !== "undefined" ? index + 1 : 0];
};

const { TextArea } = Input;
const product = productList[randomIntFromInterval(0, 2)];

interface IRate {
  id: string;
  dateTime?: string;
  score: number;
  location?: {
    id: string;
    administrativeDistrict: string;
    district: string;
    address: string;
    coordinate: string;
    locationType: string;
  };
  vendor?: {
    id: string;
    name: string;
  };
  client: {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    sex: string;
    age: number;
  };
  messageType?: {
    id: string;
    name: string;
    messageMainType: "RECEIVING_AN_ORDER";
  };
  messageSource: string;
  text: string;
}

export const RatingModal = () => {
  const [rating, setRating] = useState<IRate>({
    id: "1",
    text: "",
    score: 0,
    client: {
      id: "123",
      name: "1",
      phoneNumber: "88005553535",
      email: "email",
      sex: "yes",
      age: 20,
    },
    location: {
      id: "string",
      administrativeDistrict: "123",
      district: "12333",
      address: "555",
      coordinate: "666",
      locationType: "77",
    },
    vendor: {
      id: "vendor",
      name: "vendor-name",
    },
    messageSource: "BROWSER",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!rating.text && rating.score === 0) setIsDisabled(true);
    else setIsDisabled(false);
  }, [rating]);

  // useEffect(() => {
  //   const getMes = async () => {
  //     const [vendors, locations]: any[] = await Promise.all([
  //       getVendors(),
  //       getLocations(),
  //     ]);
  //     console.log(vendors, locations);
  //     setRating({ ...rating, vendor: vendors[0], location: locations[0] });
  //   };
  //   getMes();
  // }, []);

  const onStarChange: RateProps["onChange"] = (value) => {
    if (value) {
      setRating({ ...rating, score: value });
    }
  };

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  const onTextChange = (value: string, type?: "TAG") => {
    if (type === "TAG") {
      inputRef?.current?.focus();
      if (rating.text.includes(value)) {
        setRating({ ...rating, text: rating.text.replace(value, "") });
      } else {
        setRating({ ...rating, text: rating.text + value + " " });
      }
    } else setRating({ ...rating, text: value });
  };

  const openNotification = (type: "success" | "error") => {
    notification.open({
      message:
        type === "success" ? "Отзыв успешно отправлен!" : "Возникла ошибка!",
      icon:
        type === "success" ? (
          <CheckOutlined style={{ color: "green" }} />
        ) : null,
      description:
        type === "success"
          ? "Спасибо за ваш отзыв!"
          : "К сожалению, возникла непредвиденная ошибка!",
    });
  };

  const sendData = async () => {
    const copy = { ...rating };
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const localISOTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, -1);
    copy.dateTime = localISOTime;
    try {
      sendComment(copy).then(() => openNotification("success"));
    } catch (e) {
      openNotification("error");
    }
  };

  return (
    <div className="ratingModal">
      <div className="productCard">
        <h2 className="title">
          Ваш отзыв о <span className="redTitle">товаре</span>
        </h2>
        <Space className="productDescription">
          <Image
            className="imageBox"
            height={150}
            width={150}
            src={product.imgSrc}
          />
          <span>{product.productDescription}</span>
        </Space>
        <div className="message">
          <ExclamationCircleOutlined />
          <span>
            Если качество товара вас устроило, можете поставить только оценку
            товара. Остальные поля - не обязательны.
          </span>
        </div>
        <div className="stars">
          <Rate
            className="rate"
            onChange={onStarChange}
            value={rating.score}
            character={RateCharacter}
          />
        </div>
        <div className="comment">
          <span>
            Комментарий <span className="redTitle">*</span>
          </span>
          <TextArea
            ref={inputRef}
            style={{ resize: "none" }}
            maxLength={255}
            value={rating.text}
            onChange={(e) => onTextChange(e.target.value)}
          />
          <Space
            style={{ gap: "10px" }}
            className="commentExample"
            size={[0, 4]}
            wrap
          >
            {typeof rating.score === "number" ? (
              <>
                {commentExamples[rating.score]?.map((element) => (
                  <Tag
                    style={{ cursor: "pointer" }}
                    key={element}
                    onClick={(_) => onTextChange(element, "TAG")}
                  >
                    {element}
                  </Tag>
                ))}
              </>
            ) : (
              <></>
            )}
          </Space>
          <div className="buttonBox">
            <Button>Пропустить</Button>
            <Button disabled={isDisabled} onClick={sendData}>
              Отправить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
