import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UserPage from "./pages/users";
import BookPage from "./pages/book.jsx";
import "./styles/global.css";
import Todo from "./components/todo/Todo.jsx";
import ErrorPage from "./pages/error.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";
import PrivateRoute from "./pages/layout/private.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Todo /> },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  //</StrictMode>
);
