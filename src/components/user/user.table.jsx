import { Space, Table, Tag } from "antd";
import UserForm from "./user.form";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";
const UserTable = () => {
  const [dataUsers, setDataUser] = useState([
    { _id: "a", fullName: 24, email: "hn" },
    { _id: "b", fullName: 24, email: "hn" },
  ]);

  useEffect(() => {
    console.log(">>>run useEffect 1111");
    loadUser();
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };

  console.log(">>> run render 0000");
  return (
    <>
      <UserForm />
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    </>
  );
};
export default UserTable;
