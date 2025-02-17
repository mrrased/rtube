"use client";

import SecendContents from "@/components/Contents/SecendContents";
// import SideBar from "@/components/ui/sidebar/Sidebar";
import { Layout } from "antd";
const OtherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider className="bg-[#000000]">
      {/* <div className="hidden lg:block">
        <MainSideBar />
      </div> */}
      <Layout id="category-layout">
        {/* <SideBarComponent /> */}
        <SecendContents>{children}</SecendContents>
      </Layout>
    </Layout>
  );
};

export default OtherLayout;
