import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        // const user = userCredential.user;
        // alert("Registration successful", user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log("user profile info update");

            //create user entry in Database
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log("user Added to the DB ==>", res.data);
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("Registration failed", errorCode);
      });
  };
  //   console.log(watch("example"))

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Register - Bistro Boss Restaurant</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Type Your Name"
                className="input input-bordered"
              />
              {/* Handle Error */}
              {errors.name && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Type Your photoURL"
                className="input input-bordered"
              />
              {/* Handle Error */}
              {errors.photoURL && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Photo URL is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Type Your Email"
                className="input input-bordered"
              />
              {/* Handle Error */}
              {errors.email && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                })}
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
              {/* Handle Error */}
              {errors.password?.type === "required" && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Password must be less then 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500 font-medium text-sm mt-1">
                  Password must be at least 6 characters, include one letter,
                  one number, and one special character
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p>
            <small>
              <Link to="/Login">Already have an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
