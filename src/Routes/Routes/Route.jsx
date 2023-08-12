import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";
import EditProfile from "../../Pages/UserProfile/EditProfile";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Overview from "../../Pages/Dashboard/Overview";
import Orders from "../../Pages/Dashboard/Orders";
import AddCategories from "../../Pages/Dashboard/AddCategories";

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
        path: "/users/dashboard/:id/overview=true",
        element: <Overview />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
      {
        path: "/users/dashboard/:id/orders=true",
        element: <Orders />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
      {
        path: "/users/dashboard/:id/addcategories=true",
        element: <AddCategories />,
        loader: ({ params }) => fetch(`${API}${params._id}`),
      },
    ],
  },
]);

export default router;
