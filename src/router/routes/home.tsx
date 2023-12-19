import { RouteObject } from "../types";
import { LayoutGuard } from "../guard";
import Home from "@/views/Home";
// Home route
const HomeRoute: RouteObject = {
  path: "/home",
  element: <LayoutGuard />,
  meta: {
    title: "首页",
    icon: "home",
    orderNo: 1,
    hideChildrenInMenu: true
  }
};

export default HomeRoute;
