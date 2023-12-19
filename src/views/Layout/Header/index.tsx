import { Layout } from "antd";
import { Breadcrumb, FoldTrigger } from "./components";
import LayoutFeature from "../Feature";

const LayoutHeader = (props: any) => {
  const { Header } = Layout;

  return (
    <Header
      className="flex-bt-x"
      style={{
        flexDirection: "column",
        height: "auto",
        background: "#fff"
      }}
    >
      <div className="flex-bt-x" style={{ padding: "0 12px" }}>
        <div className="flex-center-y">
          <FoldTrigger />
        </div>
        <LayoutFeature />
      </div>
    </Header>
  );
};

export default LayoutHeader;
