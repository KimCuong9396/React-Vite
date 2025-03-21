import { useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCreateBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tạo user thành công",
      });
      resetAndCloseModal();
      //await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  return (
    <Modal
      title="Update a User"
      open={isModalOpen}
      onOk={handleCreateBtn}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"SAVE"}
    >
      <div>
        <span>FullName:</span>
        <Input
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Email:</span>
        <Input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Password:</span>
        <Input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Phone:</span>
        <Input
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
