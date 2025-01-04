import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin().then((res) => {
      console.log(res.data);
      const usersInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };

      axiosPublic.post("/users", usersInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="p-4 items-center">
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-secondary flex gap-4"
        >
          <FaGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
