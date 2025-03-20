import { Button, Input, notification } from "antd";
import { useState } from "react";
import createUserAPI from "../../services/api.service";
import ButtonGroup from "antd/es/button/button-group";

const UserForm = () => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  //console.log(">>>check fullname",{fullName, email, password, phone})
  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tạo user thành công",
      });
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
    //console.log(">>>check res:", res.data);
  };
  return (
    <div>
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
      <br />
      <div>
        <Button onClick={handleClickBtn} type="primary">
          Create User
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
