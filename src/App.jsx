import "./components/todo/todo.css";
import Header from "./pages/layout/header";
import Footer from "./pages/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
