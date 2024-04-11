import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div id="my_modal_4" className="">
          <div className="border p-10 pr-20 shadow-md rounded-md modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <Link to="/"> ✕ </Link>
              </button>

              <h3 className="font-bold text-lg">SignUp</h3>
              <div>
                {/* Name */}
                <h6 className="mt-3">Name</h6>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Name"
                  className="p-1 m-2 outline-none  border"
           
                />
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
                 {errors.emailRequired && <p className="text-red-500 text-sm">Please enter valid email address</p>}
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
                 {errors.passwordRequired && <p className="text-red-500 text-sm">This field is required</p>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 px-4 py-2  rounded-lg hover:bg-pink-700 text-white duration-300 ml-1">
                  Login
                </button>
                <p>
                  Have a Account ?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    SignUp
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
