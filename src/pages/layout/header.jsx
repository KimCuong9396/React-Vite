import { NavLink, Link } from "react-router-dom";
import { Menu } from "antd";
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

const Header = () => {
  const { user } = useContext(AuthContext);
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
                label: "Đăng xuất",
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
