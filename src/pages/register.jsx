import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

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
        style={{ margin: "10px" }}
        //onFinishFailed={onFinishFailed}
      >
        <Row justify={"center"}>
          <Col xs={24} md={6}>
            <Form.Item
              label="FullName"
              name="fullName"
              rules={[
                { required: true, message: "Please input your Full name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={6}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={6}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={6}>
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
          </Col>
        </Row>
        <Row justify={"center"}>
          {/* <button type="submit">Register</button> */}
          <Col xs={24} md={6}>
            <Button
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Register
            </Button>
          </Col>
        </Row>
      </Form>
      {/* <Button
        onClick={() => {
          //const a = form.getFieldValue("email");
          form.setFieldValue("email", "123@");
          //console.log(">>>check value", a);
        }}
        type="primary"
      >
        Test
      </Button> */}
      <Divider />
      <div>
        Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
      </div>
    </>
  );
};
export default RegisterPage;
