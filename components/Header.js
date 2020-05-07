import React from "react";
import { Row, Col, Menu } from "antd";
import "../public/style/pages/header.css";
import {
  BankOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">前端</span>
        <span className="header-txt">学习前端开发</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <BankOutlined />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <VideoCameraOutlined />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <SmileOutlined />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
