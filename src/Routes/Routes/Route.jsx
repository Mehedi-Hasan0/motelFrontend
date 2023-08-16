import { createBrowserRouter } from "react-router-dom";
import { API } from "../../backend";
import EditProfile from "../../Pages/UserProfile/EditProfile";
import MainLayout from "../../layout/MainLayout";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Overview from "../../Pages/Dashboard/Overview";
import AddCategories from "../../Pages/Dashboard/AddCategories";
import MotelYourHome from "../../Pages/MotelYourHome";
import Reservations from "../../Pages/Dashboard/Reservations";
import Listing from "../../Pages/Dashboard/Listing";
import CreateNewListLayout from "../../layout/CreateNewListLayout";
import ListHouseOverview from "../../Pages/ListHouseOverview";
import ListHouseStepOne from "../../Pages/ListingHouseStepOne/ListHouseStepOne";
import ListHouseStepOneStructure from "../../Pages/ListingHouseStepOne/ListHouseStepOneStructure";
import ListHouseStepOnePlacetype from "../../Pages/ListingHouseStepOne/ListHouseStepOnePlacetype";
import ListingHouseStepOneAddress from "../../Pages/ListingHouseStepOne/ListingHouseStepOneAddress";
import ListingHouseStepOneFloorPlan from "../../Pages/ListingHouseStepOne/ListingHouseStepOneFloorPlan";

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
        path: "/host/homes",
        element: <MotelYourHome />,
      },
      {
        path: "/users/dashboard/:id/admin/addcategories=true",
        element: <AddCategories />,
      },
    ],
  },
  {
    path: "/become-a-host",
    element: <CreateNewListLayout />,
    children: [
      {
        path: "/become-a-host",
        element: <ListHouseOverview />,
      },
      {
        path: "/become-a-host/:id/about-your-place",
        element: <ListHouseStepOne />,
      },
      {
        path: "/become-a-host/:id/structure",
        element: <ListHouseStepOneStructure />,
      },
      {
        path: "/become-a-host/:id/privacy-type",
        element: <ListHouseStepOnePlacetype />,
      },
      {
        path: "/become-a-host/:id/location",
        element: <ListingHouseStepOneAddress />,
      },
      {
        path: "/become-a-host/:id/floor-plan",
        element: <ListingHouseStepOneFloorPlan />,
      },
    ],
  },
]);

export default router;
