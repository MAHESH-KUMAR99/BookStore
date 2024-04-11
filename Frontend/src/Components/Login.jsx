import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
   <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div>
            {/* Email */}
            <h6 className="mt-3">Email</h6>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="p-1 m-2 outline-none  border"
              {...register("email", { required: true })}
            />
             {errors.email && <p className="text-red-500">Please enter valid email address</p>}
            {/* Password */}
            <h6>Password</h6>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your Password"
              className="p-1 m-2 outline-none border "
              {...register("password", { required: true })}
            />
             {errors.password && <p className="text-red-500">This field is required</p>}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 px-4 py-2  rounded-lg hover:bg-pink-700 text-white duration-300 ml-1">
              Login
            </button>
            <p>
              Not registered ?{" "}
              <Link
                className="underline text-blue-500 cursor-pointer"
                to="/SignUp"
              >
                Sign up
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
