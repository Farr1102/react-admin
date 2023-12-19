import { FC } from "react";
import { Result, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page403: FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%" }} className="flex-center">
      <Result
        status="403"
        title="403"
        subTitle="对不起，您没有权限访问此页面。"
        extra={
          <Button type="primary" onClick={() => navigate("/home")}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};

export default Page403;
