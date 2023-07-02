import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";

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
    ],
  },
]);

export default router;
