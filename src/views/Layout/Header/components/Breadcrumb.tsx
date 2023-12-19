import { Breadcrumb } from "antd";

export default function LayoutBreadcrumb() {
  const items = [{}];

  return (
    <div className="flex-center-y" style={{ padding: "0 16px" }}>
      <Breadcrumb items={items} />
    </div>
  );
}
