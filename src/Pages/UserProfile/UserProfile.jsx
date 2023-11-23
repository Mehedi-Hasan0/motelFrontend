import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import ShowUserProfileData from "../../components/userProfile/ShowUserProfileData";
import ProfileData from "../../components/userProfile/ShowUserProfileData";

const UserProfile = () => {
  const user = useSelector((state) => state.user?.userDetails);
  return (
    <main className=" max-w-[1200px] mx-auto xl:px-10 py-12 flex min-h-[80vh] relative">
      <div className=" flex flex-auto">
        <section className=" flex flex-row gap-16 items-start flex-auto">
          {user?.profileImg ? (
            <>
              <div className="w-[350px] flex flex-col profile__container">
                <div className="flex flex-col gap-4 justify-center items-center min-w-[100%] shadow-xl rounded-3xl p-7 border sticky top-[128px] profile__container__div">
                  <div className=" min-w-[114px] min-h-[114px] bg-[#222222] rounded-full flex justify-center itmes-center">
                    <img
                      src={user?.profileImg}
                      alt="User image"
                      className=" rounded-full max-w-[140px]"
                    />
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <p className="text-3xl text-[#222222] font-semibold">
                      {user?.name.firstName}
                    </p>
                    {user?.name.lastName === "guest" ? (
                      ""
                    ) : (
                      <p className="text-sm font-medium">Guest</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-[350px] flex flex-col profile__container">
              <div className="flex flex-col gap-4 justify-center items-center min-w-[100%] shadow-xl rounded-3xl p-7 border sticky top-[128px] profile__container__div">
                <div className=" min-w-[114px] min-h-[114px] bg-[#222222] rounded-full flex justify-center itmes-center">
                  <p className="text-4xl text-white font-semibold m-auto">
                    {user?.name?.firstName?.slice(0, 1)}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-3xl text-[#222222] font-semibold">
                    {user?.name.firstName}
                  </p>
                  {user?.name.lastName === "guest" ? (
                    ""
                  ) : (
                    <p className="text-sm font-medium">Guest</p>
                  )}
                </div>
              </div>
            </div>
          )}
          {user?.profileDetails?.profile ? (
            // <ShowUserProfileData />
            <ProfileData />
          ) : (
            <section
              className="xl:min-h-[400px] flex flex-col flex-1 justify-center items-center 
         profile__container"
            >
              <div className=" max-w-sm">
                <div className=" h-[1.2px] bg-[#dddddd] my-7"> </div>
                <div className=" max-w-xs flex flex-col gap-4 items-start">
                  <h2 className=" text-[22px] text-[#222222] font-semibold">
                    It&apos;s time to create your profile
                  </h2>
                  <p className=" text-sm text-[#717171]">
                    Your Motel profile is an important part of every
                    reservation. Create yours to help other Hosts and guests get
                    to know you.
                  </p>
                  <Link
                    to={`/users/show/${user?._id}/editMode=true`}
                    className={`bg-[#ff385c] hover:bg-[#d90b63] transition-all duration-300 text-white font-medium rounded-lg px-5 py-3 disabled:bg-[#dddddd]`}
                    type="submit"
                  >
                    Create profile
                  </Link>
                </div>
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
};

export default UserProfile;
