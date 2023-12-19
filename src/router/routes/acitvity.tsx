import { lazy } from "react";
import { RouteObject } from "../types";
import { LayoutGuard } from "../guard";
import { LazyLoad } from "@/components/LazyLoad";

const ActivityRoute: RouteObject = {
  path: "/activity",
  element: <LayoutGuard />,
  meta: {
    title: "活动",
    icon: "form",
    orderNo: 4
  },
  children: [
    {
      path: "create-activity",
      element: LazyLoad(lazy(() => import("@/views/Activity/CreateActivity"))),
      meta: {
        title: "创建活动",
        key: "createActivity"
      }
    }
  ]
};

export default ActivityRoute;
