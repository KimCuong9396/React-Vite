import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI, searchUserAPI } from "../services/api.service";
const UserPage = () => {
  const [dataUsers, setDataUser] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (search) loadUser();
  }, [search]);

  const loadUser = async () => {
    if (!search.trim()) {
      const res = await fetchAllUserAPI();
      setDataUser(res.data);
    } else {
      const res = await searchUserAPI(search);
      setDataUser(res.data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} setSearch={setSearch} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};
export default UserPage;
