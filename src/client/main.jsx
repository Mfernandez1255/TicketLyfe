import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Tasks from "./features/tasks/Tasks";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketList from "./features/tickets/TicketList.jsx";
import TicketDetails from "./features/tickets/TicketDetails.jsx";
import Users from "./features/users/Users.jsx";
import UserProfile from "./features/users/UserProfile.jsx";
import UserSellingList from "./features/users/UserSellingList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <TicketList /> },
      { path: "/ticket/:id", element: <TicketDetails /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <UserProfile /> },
      { path: "/users/:id/sold", element: <UserSellingList /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
