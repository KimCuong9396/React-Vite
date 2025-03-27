import { createContext, useState } from "react";

export const AuthContext = createContext({
  fullName: "",
  email: "",
  password: "",
  phone: "",
  _id: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    _id: "",
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
