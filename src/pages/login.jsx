import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import { loginUserAPI, registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  //const [loading, setLoading] = useState("false");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    //setLoading(false);
    //console.log(">>>check value", values.email);
    const res = await loginUserAPI(values.email, values.password);

    //console.log(">>>check value", res.user);
    //console.log(">>>check value", res);
    if (res.user) {
      message.success("Đăng nhập thành công");
      localStorage.setItem("access_token", res.user.Token);
      setUser(res.user);
      navigate("/");
    } else {
      notification.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
    //setLoading(false);
  };
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Đăng nhập</legend>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ margin: "10px" }}
            //onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Email không đúng định dạng!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                //loading={loading}
                type="primary"
                onClick={() => {
                  form.submit();
                }}
              >
                Login
              </Button>
              <Link to={"/"}>
                Go to home page <ArrowRightOutlined />
              </Link>
            </div>
            <Divider />
            <div>
              <h3>Chưa có tài khoản?</h3>
              <Link to={"/register"}>Đăng ký tại đây</Link>
            </div>
            <Col xs={24} md={6}></Col>
          </Form>
        </fieldset>
      </Col>
    </Row>
  );
};
export default LoginPage;
