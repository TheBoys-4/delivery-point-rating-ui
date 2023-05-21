import React from "react";
import { Space, Image, Input, Rate, Tag, Button } from "antd";
import {
  SmileOutlined,
  ExclamationCircleOutlined,
  FrownOutlined,
  MehOutlined,
} from "@ant-design/icons";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const { TextArea } = Input;

export const RatingModal = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: " 3px 4px 4px rgba(0, 0, 0, 0.25)",
          background: "#FFFFFF",
          borderRadius: "10px",
          padding: "30px 45px",
          display: "flex",
          width: "800px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <h2>Ваш отзыв о товаре</h2>
        <Space
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
          }}
        >
          <Image
            style={{ borderRadius: "50%" }}
            width={150}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <span>Негр, 1.85, Зовут Негр </span>
        </Space>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: " flex-start",
            padding: "10px 16px",
            gap: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
            background: "#EBF1FF",
          }}
        >
          <ExclamationCircleOutlined />
          <span>
            Если качество товара вас устроило, можете поставить только оценку
            товара. Остальные поля - не обязательны.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "16px",
          }}
        >
          <h3>Оцените товар</h3>
          <Rate
            style={{ fontSize: "44px", color: "#E52C3D" }}
            defaultValue={3}
            character={({ index }: any) => customIcons[index + 1]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "16px",
          }}
        >
          <span>Комментарий</span>
          <TextArea />
          <Space size={[0, 16]} wrap>
            <Tag style={{ color: "black" }} color="#EBF1FF">
              <span>Гавно</span>
            </Tag>
            <Tag style={{ color: "black" }} color="#EBF1FF">
              processing
            </Tag>
            <Tag style={{ color: "black" }} color="#EBF1FF">
              error
            </Tag>
            <Tag style={{ color: "black" }} color="#EBF1FF">
              warning
            </Tag>
            <Tag style={{ color: "black" }} color="#EBF1FF">
              default
            </Tag>
          </Space>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
          >
            <Button>Пропустить</Button>
            <Button>Отправить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
