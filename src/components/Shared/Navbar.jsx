import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import searchIcon from "../../assets/basicIcon/search.svg";
import hamburgerMenu from "../../assets/basicIcon/hamburgerMenu.svg";
import userProfile from "../../assets/basicIcon/user-profile.png";
// import AuthenticationPopUp from "../popUp/authentication/AuthenticationPopUp";
import AuthenticationPopUp from "../popUp/authentication/AuthenticationPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userLogOut } from "../../redux/actions/userActions";

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const [popup, setPopup] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const inUserProfile = pathName.includes("/users/show/");

  const user = useSelector((state) => state.user.userDetails);
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
        className={`xl:px-10 grid grid-cols-3 py-4 xl:mx-auto ${
          inUserProfile ? " max-w-[1200px]" : " max-w-screen-2xl"
        }`}
      >
        {/* logo */}
        <div className="flex flex-row gap-2 items-center">
          <Link className="text-xl text-[#ff385c] font-bold">motel</Link>
        </div>
        {/* search bar */}
        {!inUserProfile ? (
          <div className="mx-auto max-w-sm">
            <div className="border-[1px] border-[#dddddd] rounded-full px-3 py-2 flex items-center shadow hover:shadow-md transition-all cursor-pointer">
              <div className="flex flex-row items-center nav__search__button">
                <p>Anywhere</p>
                <p>Any week</p>
                <p className=" text-[#717171]">Add guests</p>
                <div className="bg-[#ff385c] rounded-full p-2">
                  <img src={searchIcon} alt="Search hotel" className="w-4" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" w-8"></div>
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
                <div
                  ref={userMenuRef}
                  className="shadow-md absolute right-9 top-[70px] bg-[#ffffff] border-[1px] border-[#dddddd] rounded-lg flex flex-col py-2 w-[230px] transition-all user__menu"
                  onClick={() => {
                    setShowUserMenu((prev) => !prev);
                  }}
                >
                  <Link
                    className="font-medium"
                    onClick={() => {
                      setShowUserMenu(false);
                    }}
                  >
                    Notifications
                  </Link>
                  <Link
                    className="font-medium"
                    onClick={() => {
                      setShowUserMenu(false);
                    }}
                  >
                    Trips
                  </Link>
                  <Link
                    className="font-medium"
                    onClick={() => {
                      setShowUserMenu(false);
                    }}
                  >
                    Wishlists
                  </Link>
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
