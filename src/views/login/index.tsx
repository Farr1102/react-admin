import type { FormInstance } from "antd/es/form";
import type { LoginParams, UserInfo } from "@/types";
import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "@/stores";
import { setToken, setUserInfo } from "@/stores/modules/userSlice";
import { loginApi, getUserInfo } from "@/api";
import CssModule from "./index.module.less";

const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const loginFormRef = useRef<FormInstance>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  // const { token, sessionTimeout } = useAppSelector(state => state.user);
  const getToken = (): string => {
    return "1";
  };

  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      setLoading(true);
      // const userInfo = await loginAction({
      //   username: values.username,
      //   password: values.password
      // });
      const userInfo = {
        userId: "1",
        username: values.username,
        realName: values.username,
        avatar: values.username,
        token: "1"
      };
      if (userInfo) {
        message.success("登陆成功！");
        navigate("/home");
      }
    } catch (error) {
      message.error((error as unknown as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loginAction = async (
    params: LoginParams & {
      goHome?: boolean;
    }
  ): Promise<UserInfo | null> => {
    try {
      const { goHome = true, ...loginParams } = params;
      const data = await loginApi(loginParams);

      // 保存 Token
      dispatch(setToken(data?.token));
      return afterLoginAction(goHome);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const afterLoginAction = async (goHome?: boolean): Promise<UserInfo | null> => {
    if (!getToken()) return null;

    const userInfo = await getUserInfoAction();

    goHome && navigate(userInfo?.homePath || "/home");

    return userInfo;
  };

  const getUserInfoAction = async (): Promise<UserInfo | null> => {
    if (!getToken()) return null;

    const userInfo = await getUserInfo();

    dispatch(setUserInfo(userInfo));

    return userInfo;
  };

  return (
    <div className={CssModule["login-wrapper"]}>
      <div className={CssModule["login-box"]}>
        <div className={CssModule["login-box-title"]}>
          <p>账 号 登 录</p>
        </div>
        <Form
          ref={loginFormRef}
          form={form}
          initialValues={{
            username: "admin853",
            password: "123456"
          }}
          className={CssModule["login-box-form"]}
          onFinish={handleLogin}
        >
          <Form.Item name="username" rules={[{ required: true, message: "请输入账号" }]}>
            <Input
              placeholder="请输入账号"
              prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} rev={undefined} />}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
            <Input
              type="password"
              placeholder="请输入密码"
              prefix={<LockOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} rev={undefined} />}
            />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="remember" className={CssModule["fl"]} valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Form.Item className={CssModule["fr"]}>
              <a href="">忘记密码？</a>
            </Form.Item>
          </div>
          <Form.Item className={CssModule["fl"]} valuePropName="checked">
            <Checkbox>用户协议</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={CssModule["login-btn"]}
              loading={loading}
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
