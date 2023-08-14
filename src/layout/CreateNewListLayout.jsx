import { Outlet } from "react-router-dom";
import ListingNavbar from "../components/Shared/ListingNavbar";
import ListingFooter from "../components/Shared/ListingFooter";

const CreateNewListLayout = () => {
  return (
    <>
      <ListingNavbar />
      <Outlet />
      <ListingFooter />
    </>
  );
};

export default CreateNewListLayout;
