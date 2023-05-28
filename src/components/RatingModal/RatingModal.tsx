import React, { useEffect, useState } from "react";
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
  messageType: {
    id: string;
    name: string;
    messageMainType: "RECEIVING_AN_ORDER";
  };
  messageSource: "TEST";
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
    messageType: {
      id: "333",
      name: "name",
      messageMainType: "RECEIVING_AN_ORDER",
    },
    messageSource: "TEST",
  });

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (!rating.text) setIsDisabled(true);
    else setIsDisabled(false);
  }, [rating]);

  useEffect(() => {
    const getMes = async () => {
      const [vendors, locations]: any[] = await Promise.all([
        getVendors(),
        getLocations(),
      ]);
      console.log(vendors, locations);
      setRating({ ...rating, vendor: vendors[0], location: locations[0] });
    };
    getMes();
  }, []);

  const onStarChange: RateProps["onChange"] = (value) => {
    if (value) {
      setRating({ ...rating, score: value });
    }
  };

  const openNotification = () => {
    notification.open({
      message: "Отзыв успешно отправлен!",
      icon: <CheckOutlined style={{ color: "green" }} />,
      description: "Спасибо за ваш отзыв!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const sendData = async () => {
    const copy = { ...rating };
    let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    let localISOTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, -1);
    console.log(localISOTime);
    copy.dateTime = localISOTime;
    try {
      sendComment(copy).then(() => openNotification());
    } catch (e) {
      console.log(e);
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
            style={{ resize: "none" }}
            maxLength={255}
            value={rating?.text}
            onChange={(e) => setRating({ ...rating, text: e.target.value })}
          />
          <Space
            style={{ gap: "16px" }}
            className="commentExample"
            size={[0, 16]}
            wrap
          >
            {typeof rating.score === "number" ? (
              <>
                {commentExamples[rating.score]?.map((element) => (
                  <Tag
                    style={{ cursor: "pointer" }}
                    key={element}
                    onClick={(_) => setRating({ ...rating, text: element })}
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
