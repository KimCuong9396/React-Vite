import { Modal, notification } from "antd";
import { deleteUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const DeleteUserModal = (props) => {
  const [id, setId] = useState("");
  const {
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    loadUser,
    dataId,
    setDataId,
  } = props;
  useEffect(() => {
    if (dataId) {
      setId(dataId._id);
    }
  }, [dataId]);
  const closeModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleDeleteBtn = async () => {
    //console.log("check id1", id);
    const res = await deleteUserAPI(id);
    notification.success({
      message: "Xóa user",
      description: "Xóa user thành công",
    });
    closeModal();
    await loadUser();
  };
  return (
    <Modal
      title="Detail user"
      open={isModalDeleteOpen}
      onOk={handleDeleteBtn}
      onCancel={closeModal}
      okText={"YES"}
      cancelText={"No"}
    >
      <div>Bạn có chắc muốn xóa User này không?</div>
    </Modal>
  );
};
export default DeleteUserModal;
