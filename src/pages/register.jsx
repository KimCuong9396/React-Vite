import { Button, Form, Input } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(">>>check value", values);
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
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your username!" }]}
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
      {/* <Button type="primary">Register</Button> */}
    </>
  );
};
export default RegisterPage;
