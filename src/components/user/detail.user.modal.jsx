import { Input, Modal, Table } from "antd";
import { useState, useEffect } from "react";

const ShowDetailUser = (props) => {
  const { isModalDetailOpen, setIsModalDetailOpen, dataDetail } = props;
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (dataDetail) {
      setId(dataDetail._id);
      setFullName(dataDetail.fullName);
      setEmail(dataDetail.email);
      setPhone(dataDetail.phone);
    }
  }, [dataDetail]);
  const closeModal = () => {
    setIsModalDetailOpen(false);
  };
  return (
    <Modal
      title="Detail user"
      open={isModalDetailOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <div>
        <div>
          <span>Id:</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Full Name:</span>
          <Input value={fullName} disabled />
        </div>
        <div>
          <span>Email:</span>
          <Input value={email} disabled />
        </div>
        <div>
          <span>Phone:</span>
          <Input value={phone} disabled />
        </div>
      </div>
    </Modal>
  );
};
export default ShowDetailUser;
