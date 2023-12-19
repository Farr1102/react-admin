import { FC } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page404: FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%" }} className="flex-center">
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在。"
        extra={
          <Button type="primary" onClick={() => navigate("/home")}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};

export default Page404;
