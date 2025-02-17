"use client";

import { Col, Layout, Row } from "antd";
import Header from "../Header/Header";
const { Content } = Layout;

const SecendContents = ({ children }: { children: React.ReactNode }) => {
  //   const FrontHeader = dynamic(() => import("../header/Header"), { ssr: false });

  return (
    <Content
      style={{
        minHeight: "100vh",
        overflow: "initial",
      }}
    >
      <Header />
      <div className="2xl:w-with mx-auto mt-[7rem] md:mt-[5rem]">
        <Row>
          <Col xs={24} xxl={24}>
            <div className="">
              <Row className="md:mx-1 xl:mx-1 2xl:mx-0">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  {children}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default SecendContents;
