import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
const UserForm = (props) => {
  const { loadUser } = props;
  //console.log(">>>loadUser", loadUser);
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBtn = () => {
    setIsModalOpen(true);
  };
  const handleCreateBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tạo user thành công",
      });
      resetAndCloseModal();
      await loadUser();
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
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button onClick={handleClickBtn} type="primary">
          Create User
        </Button>
      </div>
      <Modal
        title="Create user"
        open={isModalOpen}
        onOk={handleCreateBtn}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"CREATE"}
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
    </div>
  );
};

export default UserForm;
