import { Divider } from "antd";
import { FullScreen, DocLink, UserDropdown } from "./components";
import moduleStyle from "./index.module.less";

export default function LayoutFeature() {
  const prefixCls = "layout_feature";

  return (
    <div className={moduleStyle[prefixCls]}>
      <div className={moduleStyle[`${prefixCls}-main`]}>
        <FullScreen />
        <DocLink />
      </div>
      <Divider type="vertical" className={moduleStyle[`${prefixCls}-divider`]} />
      <UserDropdown />
    </div>
  );
}
