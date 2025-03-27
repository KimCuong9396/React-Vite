import "./components/todo/todo.css";
import Header from "./pages/layout/header";
import Footer from "./pages/layout/footer";
import { Outlet } from "react-router-dom";

const ParentComponent = (props) => {
  return (
    <>
      <div>Parent component</div>
      {props.children}
    </>
  );
};
const ChildComponent = (props) => {
  return <div>Child component</div>;
};
const App = () => {
  return (
    <>
      <ParentComponent>
        hhhhhh
        <ChildComponent />
      </ParentComponent>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
