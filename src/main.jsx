import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UserPage from "./pages/users";
import ProductPage from "./pages/products";
import "./styles/global.css"
import Todo from "./components/todo/Todo.jsx";
const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    { index: true, element: <Todo /> },
    {
      path: "/users",
      element: <UserPage/>,
    },
    {
      path: "/products",
      element: <ProductPage/>,
    },
  ]
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  ]);

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );