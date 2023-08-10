import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";
import EditProfile from "../../Pages/UserProfile/EditProfile";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/users/show/:id",
        element: <UserProfile />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
      {
        path: "/users/show/:id/editMode=true",
        element: <EditProfile />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
      {
        path: "/users/dashboard/:id",
        element: <Dashboard />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
    ],
  },
]);

export default router;
