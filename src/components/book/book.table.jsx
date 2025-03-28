import React from "react";
import { Button, Space, Table, Tag } from "antd";
const BookTable = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      stt: "1",
      id: "1",
      mainText: "John Brown",
      price: 32,
      quantity: "New York No. 1 Lake Park",
      author: ["nice", "developer"],
    },
    {
      stt: "1",
      id: "1",
      mainText: "John Brown",
      price: 32,
      quantity: "New York No. 1 Lake Park",
      author: ["nice", "developer"],
    },
    {
      stt: "1",
      id: "1",
      mainText: "John Brown",
      price: 32,
      quantity: "New York No. 1 Lake Park",
      author: ["nice", "developer"],
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <h2>Table Book</h2>
        <Button type="primary">Create Book</Button>
      </div>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};
export default BookTable;
