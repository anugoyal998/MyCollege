import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { LongButton } from "../../styles/global";

export const Admin = () => {
  const user = useSelector((state) => state.authReducer.auth);
  const handleLogout = () => {
    Cookies.remove("user");
    toast.success("Logout success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="animate__animated animate__fadeInDown flex flex-col items-center space-x-3 bg-white sm:p-8 xs:p-5 p-3 shadow-lg rounded-lg">
      <div className="flex justify-center items-center">
        <img
          src={user?.img}
          alt={`${user.name}`}
          className="rounded-full border"
        />
        <div className="ml-3">
          <p className="text-lg font-semibold capitalize">{user?.name}</p>
          <p className="text-lg italic">{user.email}</p>
        </div>
      </div>
      <LongButton
        className="bg-blue-700 text-white mx-3 w-full mt-6"
        onClick={handleLogout}
      >
        Logout
      </LongButton>
    </div>
  );
};
