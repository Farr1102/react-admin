import { lazy } from "react";
import { RouteObject } from "../types";
import { LayoutGuard } from "../guard";
import { LazyLoad } from "@/components/LazyLoad";

// tree module page
const TreeRoute: RouteObject = {
  path: "/tree",
  element: <LayoutGuard />,
  meta: {
    title: "树形结构",
    icon: "tree",
    orderNo: 9
  },
  children: [
    {
      path: "antd-tree",
      element: LazyLoad(lazy(() => import("@/views/Tree/AntdTree"))),
      meta: {
        title: "控件树",
        key: "antdTree"
      }
    }
  ]
};

export default TreeRoute;
