import { lazy } from "react";
import { RouteObject } from "../types";
import { LayoutGuard } from "../guard";
import { LazyLoad } from "@/components/LazyLoad";

// table module page
const TableRoute: RouteObject = {
  path: "/table",
  element: <LayoutGuard />,
  meta: {
    title: "表格",
    icon: "table",
    orderNo: 3
  },
  children: [
    {
      path: "table-basic",
      element: LazyLoad(lazy(() => import("@/views/Table/TableBasic"))),
      meta: {
        title: "基础表格",
        key: "tableBasic"
      }
    },
    {
      path: "table-edit-row",
      element: LazyLoad(lazy(() => import("@/views/Table/TableEditRow"))),
      meta: {
        title: "可编辑行表格",
        key: "tableEditRow"
      }
    }
  ]
};

export default TableRoute;
