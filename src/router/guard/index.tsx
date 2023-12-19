import { BasicLayout } from "@/views/Layout";
import { GuardRoute } from "./guardRoute";

export const LayoutGuard = () => {
  return (
    <GuardRoute>
      <BasicLayout />
    </GuardRoute>
  );
};
