import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/users";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};
const fetchAllUserAPI = () => {
  const URL_BACKEND = "/api/";
  return axios.get(URL_BACKEND);
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/";
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};

const deleteUserAPI = (_id) => {
  const URL_BACKEND = `/api/${_id}`;
  return axios.delete(URL_BACKEND);
};
const searchUserAPI = (keyword) => {
  const URL_BACKEND = `/api/search?keyword=${encodeURIComponent(keyword)}`;
  return axios.get(URL_BACKEND);
};

const registerUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/register";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};

const loginUserAPI = async (email, password) => {
  try {
    const URL_BACKEND = "/api/login"; // URL của backend
    const response = await axios.post(URL_BACKEND, {
      email,
      password,
    });

    return response.data; // Trả về kết quả từ backend (ví dụ: "Đăng nhập thành công!")
  } catch (error) {
    return error.response?.data || { message: "Có lỗi xảy ra!" };
  }
};

const getAccountAPI = () => {
  const URL_BACKEND = "/api/me";
  return axios.get(URL_BACKEND);
};

const logoutAPI = () => {
  const URL_BACKEND = "/api/logout";
  return axios.post(URL_BACKEND);
};
export {
  createUserAPI,
  fetchAllUserAPI,
  updateUserAPI,
  deleteUserAPI,
  searchUserAPI,
  registerUserAPI,
  loginUserAPI,
  getAccountAPI,
  logoutAPI,
};
