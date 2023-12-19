import { RouteObject } from "./types";
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "@/views/Login";
import { LazyLoad } from "@/components/LazyLoad";
import { lazy } from "react";
import Page404 from "@/views/Exception/page-404";

// @ts-ignore
const metaRoutes = require.context("./routes", true, /\.tsx$/);
const modules = metaRoutes.keys().map(metaRoutes);
const routeList: RouteObject[] = [];

[...modules].forEach(key => {
  const item = key.default ?? {};
  const moduleList = Array.isArray(item) ? [...item] : [item];
  routeList.push(...moduleList);
});

const rootRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/login",
    element: <LoginPage />,
    meta: {
      title: "登录页",
      key: "login"
    }
  },
  ...routeList,
  {
    path: "*",
    element: <Page404 />,
    meta: {
      title: "404页面",
      key: "page404"
    }
  },
  {
    path: "page-403",
    element: LazyLoad(lazy(() => import("@/views/Exception/page-403"))),
    meta: {
      title: "403页面",
      key: "page403"
    }
  },
  {
    path: "page-500",
    element: LazyLoad(lazy(() => import("@/views/Exception/page-500"))),
    meta: {
      title: "500页面",
      key: "page500"
    }
  }
];

export { routeList as basicRoutes };

export default createBrowserRouter(rootRoutes);
