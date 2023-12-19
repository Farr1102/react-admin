import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LayoutMenu from "./Menu";
import LayoutHeader from "./Header";
import "./index.less";
import { useTitle } from "@/hooks/web/useTitle";

export const BasicLayout = (props: any) => {
  useTitle();
  const { Sider, Content } = Layout;

  return (
    <Layout className="layout_wrapper">
      <Sider width={210} style={{ height: "100vh" }}>
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
