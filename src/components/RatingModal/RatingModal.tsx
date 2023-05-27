import React, { useState } from "react";
import { Space, Image, Input, Rate, Tag, Button, RateProps } from "antd";
import {
  SmileOutlined,
  ExclamationCircleOutlined,
  FrownOutlined,
  MehOutlined,
} from "@ant-design/icons";
import "./RatingModal.scss";
import { commentExamples, productList } from "./constants";
import { randomIntFromInterval } from "../../shared/helpers";
import { getMessages } from "../../api/requests";

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

export const RatingModal = () => {
  const [starState, setStarState] = useState<number | undefined>();
  const [comment, setComment] = useState<string>("");

  const onStarChange: RateProps["onChange"] = (value) => {
    if (value) {
      setStarState(value);
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
            value={starState}
            character={RateCharacter}
          />
        </div>
        <div className="comment">
          <span>Комментарий</span>
          <TextArea
            maxLength={255}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Space
            style={{ gap: "16px" }}
            className="commentExample"
            size={[0, 16]}
            wrap
          >
            {typeof starState === "number" ? (
              <>
                {commentExamples[starState]?.map((element) => (
                  <Tag key={element} onClick={(_) => setComment(element)}>
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
            <Button>Отправить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
