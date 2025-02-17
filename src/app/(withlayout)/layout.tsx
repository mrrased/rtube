"use client";

import Contents from "@/components/Contents/Contents";
// import SideBar from "@/components/ui/sidebar/Sidebar";
import { Layout } from "antd";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider className="bg-[#000000]">
      {/* <div className="hidden lg:block">
        <MainSideBar />
      </div> */}
      <Layout id="category-layout">
        {/* <SideBarComponent /> */}
        <Contents>{children}</Contents>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
