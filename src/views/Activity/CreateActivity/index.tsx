import type { Rule } from "antd/es/form";
import { FC, useMemo, useRef } from "react";
import { Card, Form, Input, Button, Select, DatePicker, Radio } from "antd";
import { provinceData, cityData, cascaderData, treeData, radioData, checkboxData } from "./data";

const { RangePicker } = DatePicker;
const CreateActivity: FC = () => {
  const [form] = Form.useForm();

  const formState = useRef({
    acPw: "账号：124242  密码：123131",
    orgName: "",
    serviceTime: "",
    prodLine: "",
    superior: "",
    activityName: ""
  });

  const formRules: Record<string, Rule[]> = useMemo(
    () => ({
      // required: [{ required: true, message: "内容不能为空" }],
      acPw: [{ required: true, message: "内容不能为空" }],
      orgName: [{ required: true, message: "内容不能为空" }],
      serviceTime: [{ required: true, message: "内容不能为空" }],
      prodLine: [{ required: true, message: "内容不能为空" }],
      superior: [{ required: true, message: "内容不能为空" }],
      activityName: [{ required: true, message: "内容不能为空" }]
    }),
    []
  );

  const handleProvinceChange = (value: any) => {
    form.setFieldsValue({ selectCity: cityData[value][0] });
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <div>
      <Card bordered={false}>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ ...formState.current }}
          style={{ width: "40%", margin: "0 auto" }}
          onFinish={onFinish}
        >
          <Form.Item label="账号密码:" name="acPw" rules={formRules.acPw}>
            <Input placeholder="请输入内容" />
          </Form.Item>
          <Form.Item label="机构名称:" name="orgName" rules={formRules.orgName}>
            <Input placeholder="请输入机构" />
          </Form.Item>
          <Form.Item label="服务时间段:" name="serviceTime" rules={formRules.serviceTime}>
            <RangePicker showTime />
          </Form.Item>
          <Form.Item label="选择产品线:" name="prodLine" rules={formRules.prodLine}>
            <Radio.Group
              options={[
                { label: "鹰瞳健康", value: "true" },
                { label: "非鹰瞳健康", value: "false" }
              ]}
            />
          </Form.Item>
          <Form.Item label="上级账号:" name="superior" rules={formRules.superior}>
            <Select
              options={provinceData.map((pro: any) => ({ value: pro }))}
              onChange={handleProvinceChange}
            />
          </Form.Item>
          <Form.Item label="活动名称:" name="activityName" rules={formRules.activityName}>
            <Select
              options={provinceData.map((pro: any) => ({ value: pro }))}
              onChange={handleProvinceChange}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button style={{ marginLeft: "12px" }} onClick={resetForm}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateActivity;
