import { useState, lazy, Suspense } from "react";
import { Button, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
// import navigation from "./routers";
// const navigate = useNavigate();

const MenuRouter = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const handleMenuClick = ({ key }) => {
  //   if (key) {
  //     navigate(key);
  //   }
  // };
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        // items={navigation}
        // onClick={handleMenuClick}
      />
    </>
  );
};

export default MenuRouter;
