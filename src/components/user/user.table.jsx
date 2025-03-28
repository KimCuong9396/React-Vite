import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.model";
import { useState } from "react";
import ShowDetailUser from "./detail.user.modal";
import DeleteUserModal from "./delete.user.modal";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [dataId, setDataId] = useState(null);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsModalDetailOpen(true);
              setDataDetail(record);
              //console.log("record>>", record);
            }}
          >
            {record._id}{" "}
          </a>
        );
      },
    },
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              //console.log("record1>>", record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <DeleteOutlined
            onClick={() => {
              setDataId(record);
              //console.log("record delete>>", record);
              setIsModalDeleteOpen(true);
            }}
            style={{ cursor: "pointer", color: "red" }}
          />
        </div>
      ),
    },
  ];
  //console.log(">>>check dataUpdate:", dataUpdate);

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ShowDetailUser
        isModalDetailOpen={isModalDetailOpen}
        setIsModalDetailOpen={setIsModalDetailOpen}
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
      />
      <DeleteUserModal
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
        dataId={dataId}
        setDataId={setDataId}
        loadUser={loadUser}
      />
    </>
  );
};
export default UserTable;
