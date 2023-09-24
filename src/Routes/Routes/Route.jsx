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
import StepTwoOverview from "../../Pages/ListingHouseStepTwo/StepTwoOverview";
import Amenities from "../../Pages/ListingHouseStepTwo/Amenities";
import ListingHousePhotos from "../../Pages/ListingHouseStepTwo/ListingHousePhotos";
import HouseTitle from "../../Pages/ListingHouseStepTwo/HouseTitle";
import Highlight from "../../Pages/ListingHouseStepTwo/Highlight";
import Description from "../../Pages/ListingHouseStepTwo/Description";
import FinalStepOverview from "../../Pages/ListingHouseFinalStep/FinalStepOverview";
import Visibility from "../../Pages/ListingHouseFinalStep/Visibility";
import Pricing from "../../Pages/ListingHouseFinalStep/Pricing";
import Legal from "../../Pages/ListingHouseFinalStep/Legal";
import Receipt from "../../Pages/ListingHouseFinalStep/Receipt";
import Thankyou from "../../Pages/ListingHouseFinalStep/Thankyou";
import Home from "../../Pages/Home";
import ListingDetails from "../../Pages/ListingDetails";
import Book from "../../Pages/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms/:id",
        element: <ListingDetails />,
        loader: ({ params }) => fetch(`${API}house/listing/${params.id}`),
      },
      {
        path: "/book/stays/:id",
        element: <Book />,
      },
      {
        path: "/users/show/:id",
        element: <UserProfile />,
      },
      {
        path: "/users/show/:id/editMode=true",
        element: <EditProfile />,
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
      {
        path: "/become-a-host/:id/stand-out",
        element: <StepTwoOverview />,
      },
      {
        path: "/become-a-host/:id/amenities",
        element: <Amenities />,
      },
      {
        path: "/become-a-host/:id/photos",
        element: <ListingHousePhotos />,
      },
      {
        path: "/become-a-host/:id/title",
        element: <HouseTitle />,
      },
      {
        path: "/become-a-host/:id/highlight",
        element: <Highlight />,
      },
      {
        path: "/become-a-host/:id/description",
        element: <Description />,
      },
      {
        path: "/become-a-host/:id/finish-step",
        element: <FinalStepOverview />,
      },
      {
        path: "/become-a-host/:id/visiblity",
        element: <Visibility />,
      },
      {
        path: "/become-a-host/:id/price",
        element: <Pricing />,
      },
      {
        path: "/become-a-host/:id/legal",
        element: <Legal />,
      },
      {
        path: "/become-a-host/:id/receipt",
        element: <Receipt />,
      },
      {
        path: "/become-a-host/:id/published",
        element: <Thankyou />,
      },
    ],
  },
]);

export default router;
