import { Space, Table, Tag } from "antd";
import UserForm from "./user.form";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";
const UserTable = () => {
  const [dataUsers, setDataUser] = useState([
    { _id: "a", fullName: 24, email: "hn" },
    { _id: "a", fullName: 24, email: "hn" },
  ]);

  useEffect(() => {
    console.log(">>>run useEffect 1111");
  });
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
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];
  const loadUser = async () => {
    console.log(">>> run loadUser START");
    const res = await fetchAllUserAPI();
    console.log(">>> run loadUser END", res);
  };
  loadUser();
  return (
    <>
      <UserForm />
      <Table columns={columns} dataSource={dataUsers} />
    </>
  );
};
export default UserTable;
