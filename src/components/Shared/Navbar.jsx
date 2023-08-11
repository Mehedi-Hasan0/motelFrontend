import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AuthenticationPopUp from "../popUp/authentication/AuthenticationPopUp";
import MiniNavbar from "../dashboard/DashboardMenu";
import { getUser, userLogOut } from "../../redux/actions/userActions";
import hamburgerMenu from "../../assets/basicIcon/hamburgerMenu.svg";
import motelLogo from "../../assets/Travel_Logo.png";
import userProfile from "../../assets/basicIcon/user-profile.png";
import searchIcon from "../../assets/basicIcon/search.svg";

const Navbar = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const pathName = location.pathname;
  const inUserProfile = pathName.includes("/users/show/");
  const inUserDashboard = pathName.includes("/users/dashboard/");

  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();

  console.log(user);

  const handleLogout = () => {
    dispatch(userLogOut());
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mouseup", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="border-b-[1.4px] border-[#f1f1f1] sticky top-0 z-[99] bg-white">
      <div
        className={`xl:px-10 py-4 xl:mx-auto items-center ${
          inUserProfile || inUserDashboard
            ? " max-w-[1200px]"
            : " max-w-screen-2xl"
        }
        ${
          inUserDashboard ? "flex flex-row justify-between" : "grid grid-cols-3"
        }
        `}
      >
        {/* logo */}
        <div className=" md:w-[220px]">
          <Link
            to="/"
            className="flex flex-row gap-2 items-center max-w-[120px]"
          >
            <img src={motelLogo} alt="Logo" className=" w-10" />
            <p className="text-xl text-[#ff385c] font-bold">motel</p>
          </Link>
        </div>

        {/* searchbar */}
        {inUserProfile || inUserDashboard ? (
          // if user is in dahsboard
          <div>{inUserDashboard && <MiniNavbar />}</div>
        ) : (
          <div className="mx-auto">
            <div className="border-[1px] border-[#dddddd] rounded-full px-3 py-2 flex items-center shadow hover:shadow-md transition-all cursor-pointer">
              <input
                type="search"
                className=" focus:outline-none pl-2"
                placeholder="Search for places"
              />
              <div className="bg-[#ff385c] rounded-full p-2">
                <img src={searchIcon} alt="Search hotel" className="w-4" />
              </div>
            </div>
          </div>
        )}

        {/* user bar */}
        <div className="flex justify-end items-center">
          <div className=" bg-[#ffffff] hover:bg-[#f0f0f0] transition-all rounded-full p-3 cursor-pointer mr-3">
            <p className="text-sm font-medium text-[#222222]">
              Motel your home
            </p>
          </div>
          <div
            className="border-[1px] border-[#dddddd] rounded-full py-1 px-2 flex flex-row gap-3 hover:shadow-md transition-all cursor-pointer relative"
            onClick={() => {
              setShowUserMenu((prevValue) => !prevValue);
            }}
          >
            <img src={hamburgerMenu} alt="Motel user menu" className="w-4" />
            {user ? (
              <p className=" bg-[#222222] text-[#efefef] px-3 py-2 rounded-full text-xs">
                {user.name?.firstName?.slice(0, 1)}
              </p>
            ) : (
              <img src={userProfile} alt="user profile icon" className="w-8" />
            )}
          </div>

          {/* menu items code  */}

          {showUserMenu ? (
            <>
              {!user ? (
                <div
                  ref={userMenuRef}
                  className="shadow-md absolute right-9 top-[74px] bg-[#ffffff] border-[1px] border-[#dddddd] rounded-lg flex flex-col py-2 w-[230px] transition-all user__menu"
                >
                  <Link
                    className="font-medium"
                    onClick={() => {
                      setShowUserMenu(false);
                      setPopup(true);
                    }}
                  >
                    Sign up
                  </Link>
                  <Link
                    onClick={() => {
                      setShowUserMenu(false);
                      setPopup(true);
                    }}
                  >
                    Login
                  </Link>
                  <hr className="h-[1.5px] bg-[#dddddd] my-1" />
                  <Link>Motel your home</Link>
                  <Link>Help</Link>
                </div>
              ) : (
                // logged in user menu
                <div
                  ref={userMenuRef}
                  className="shadow-md absolute right-9 top-[70px] bg-[#ffffff] border-[1px] border-[#dddddd] rounded-lg flex flex-col py-2 w-[230px] transition-all user__menu"
                  onClick={() => {
                    setShowUserMenu((prev) => !prev);
                  }}
                >
                  {user?.role === "renter" || user?.role === "admin" ? (
                    <Link
                      to={`/users/dashboard/${user._id}/overview=true`}
                      onClick={() => {
                        JSON.stringify(sessionStorage.setItem("activePage", 1));
                      }}
                      className="font-medium"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link className="font-medium">Notifications</Link>
                  )}
                  <Link className="font-medium">Trips</Link>
                  <Link className="font-medium">Wishlists</Link>
                  <hr className="h-[1.5px] bg-[#dddddd] my-1" />
                  <Link>Motel your home</Link>
                  <Link to={`/users/show/${user._id}`}>Account</Link>
                  <hr className="h-[1.5px] bg-[#dddddd] my-1" />
                  <Link>Help</Link>
                  <Link
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Log out
                  </Link>
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
      <AuthenticationPopUp popup={popup} setPopup={setPopup} />
    </nav>
  );
};

export default Navbar;
