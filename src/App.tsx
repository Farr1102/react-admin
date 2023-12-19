import { theme } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import "./App.less";

const App = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return <RouterProvider router={router} />;
};

export default App;
