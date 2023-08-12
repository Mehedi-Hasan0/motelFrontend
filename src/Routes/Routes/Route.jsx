import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";
import EditProfile from "../../Pages/UserProfile/EditProfile";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Overview from "../../Pages/Dashboard/Overview";
import Orders from "../../Pages/Dashboard/Orders";
import AddCategories from "../../Pages/Dashboard/AddCategories";
import Listing from "../../components/dashboard/Listing";
import Reservations from "../../components/dashboard/Reservations";
import CreateNewListing from "../../Pages/CreateNewListing";

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
      },
      {
        path: "/users/dashboard/:id/reservations",
        element: <Reservations />,
      },
      {
        path: "/users/dashboard/:id/listing=true",
        element: <Listing />,
      },
      {
        path: "/users/dashboard/:id/newlisting=true",
        element: <CreateNewListing />,
      },
      {
        path: "/users/dashboard/:id/admin/addcategories=true",
        element: <AddCategories />,
      },
    ],
  },
]);

export default router;
