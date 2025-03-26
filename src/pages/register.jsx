import { Button, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(">>>check value", values);
    //call api
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    //console.log(">>>check res", res);
    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Đăng ký user thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user",
        description: "Đăng ký user fail",
      });
    }
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="FullName"
          name="fullName"
          rules={[{ required: true, message: "Please input your Full name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              //type: "regexp",
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <button type="submit">Register</button> */}
        <Button
          type="primary"
          onClick={() => {
            form.submit();
          }}
        >
          Register
        </Button>
      </Form>
      <Button
        onClick={() => {
          //const a = form.getFieldValue("email");
          form.setFieldValue("email", "123@");
          //console.log(">>>check value", a);
        }}
        type="primary"
      >
        Test
      </Button>
    </>
  );
};
export default RegisterPage;
