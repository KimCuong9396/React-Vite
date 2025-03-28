import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import {
  UserSwitchOutlined,
  HomeOutlined,
  AuditOutlined,
  SettingOutlined,
  LoginOutlined,
  MessageOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logoutAPI();
    console.log(">>>check res", res);

    if (res.data) {
      //clear data
      localStorage.removeItem("access_token");
      setUser({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        _id: "",
      });
      message.success("Logout thành công.");
      //redirect to home
      navigate("/");
    }
  };
  const { user, setUser } = useContext(AuthContext);
  console.log(">>>check user", user._id);

  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    //console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>User</Link>,
      key: "users",
      icon: <UserSwitchOutlined />,
    },
    {
      label: <Link to={"/books"}>Book</Link>,
      key: "book",
      icon: <AuditOutlined />,
    },

    ...(!user._id
      ? [
          {
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),
    ...(user._id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "welcome",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: (
                  <span
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Đăng xuất
                  </span>
                ),
                key: "logout",
              },
            ],
          },
        ]
      : []),

    {},
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
