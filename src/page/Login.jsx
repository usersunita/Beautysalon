import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { userLoginSchema } from "../Schema/Register";
import InputField from "../component/InputField";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(userLoginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {};

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="flex justify-center flex-col gap-4 w-[350px]">
          <div className="flex justify-center">
            <h1 className="py-4 text-[28px] font-semibold">Login</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <InputField
              required
              inputClassName="border-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeHolder="Your email..."
              labelName="Email"
              type="email"
              name="email"
              register={register}
            />
            {errors?.email && (
              <span className="text-[12px] text-red-600">
                {errors?.email?.message}
              </span>
            )}

            <InputField
              required
              inputClassName="border-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeHolder="Your password..."
              labelName="Password"
              type="password"
              name="password"
              register={register}
            />
            {errors?.password && (
              <span className="text-[12px] text-red-600">
                {errors?.password?.message}
              </span>
            )}

            <div className="flex w-full bg-blue-600 py-2 rounded-md mt-4">
              <button
                type="submit"
                className="text-[16px] text-center mx-auto text-white cursor-pointer"
                disabled={!isDirty || !isValid}
              >
                {"Submit"}
              </button>
            </div>
          </form>

          <p className="text-[14px] mx-auto pt-1">
            or Use one of these options
          </p>
          <div className="p-2 flex justify-center text-sm">
            <button>Continue with your email</button>
          </div>
          <div className="p-2 flex justify-center text-sm text-white bg-blue-600 rounded-md">
            <button>Facebook</button>
          </div>

          <div className="flex justify-center text-[14px] mt-8">
            <p>
              Already have an account?{" "}
              <span className="text-blue-500">
                <NavLink to="/register">Register</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
