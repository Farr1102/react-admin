import { FC } from "react";
import { Result, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page500: FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%" }} className="flex-center">
      <Result
        status="500"
        title="500"
        subTitle="对不起，服务器发生错误。"
        extra={
          <Button type="primary" onClick={() => navigate("/home")}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};

export default Page500;
