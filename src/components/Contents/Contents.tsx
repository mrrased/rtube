"use client";

import { Col, ConfigProvider, FloatButton, Layout, Row } from "antd";
import SideBarComponent from "../Bar/SideBarComponent";
import Header from "../Header/Header";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  //   const FrontHeader = dynamic(() => import("../header/Header"), { ssr: false });

  const handleFacebook = () => {
    // router.push("https://m.me/350822312662586");
    window.open("https://m.me/350822312662586", "_blank");
  };

  return (
    <Content
      style={{
        minHeight: "100vh",
        overflow: "initial",
      }}
    >
      <Header />
      {/* <div className="w-with mx-auto">
        <CBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "product",
              link: `/${base}/product`,
            },
          ]}
        />
      </div> */}

      <div className="2xl:w-with mx-auto mt-[7rem] md:mt-[5rem]">
        <Row>
          <Col xs={0} xxl={4}></Col>
          <Col xs={24} xxl={16}>
            <div className="">
              {/* <div className="bg-[#ffffff] py-2 rounded-md">
                <div className="flex items-center justify-between  mx-5 xl:mx-10 2xl:mx-5">
                  <div className="font-semibold text-base">User Dashboard</div>
                  <div className="flex items-center space-x-3">
                    <Link
                      href={"/"}
                      className="text-textBlackColor hover:text-textGreenColor hover:underline"
                    >
                      <AiOutlineHome className="text-lg" />
                    </Link>
                    <AiOutlineRight />
                    <div className="text-textGreenColor hover:text-textGreenColor cursor-default">
                      Dashboard
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="ml-3 md:ml-8 2xl:ml-0">
                <Breadcrumb abc={d} />
              </div> */}

              <Row className="md:mx-1 xl:mx-1 2xl:mx-0">
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={0}
                  xl={4}
                  className="hidden lg:block mt-2"
                >
                  <div className="hidden lg:block">
                    <SideBarComponent />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={20}
                  className="xl:pl-2 2xl:pl-4"
                >
                  {children}
                </Col>
              </Row>
              {/* <TopFooter />
            <BottomFooter /> */}
            </div>
          </Col>
          <Col xs={0} xxl={4}></Col>
        </Row>
        {/* <TopFooter />
          <BottomFooter /> */}
      </div>
      <FloatButton.Group
        shape="circle"
        style={{ insetInlineEnd: 15, bottom: 100 }}
      >
        <ConfigProvider
          theme={{
            token: {
              fontSize: 22,
              colorText: "#0084FF",
            },
          }}
        >
          <FloatButton
            onClick={() => handleFacebook()}
            // icon={<FaFacebookMessenger />}
          />
        </ConfigProvider>
        <ConfigProvider
          theme={{
            token: {
              fontSize: 22,
            },
          }}
        >
          {/* <FloatButton.BackTop
            icon={<FacebookOutlined />}
            duration={700}
            visibilityHeight={800}
          /> */}
        </ConfigProvider>
      </FloatButton.Group>
    </Content>
  );
};

export default Contents;
