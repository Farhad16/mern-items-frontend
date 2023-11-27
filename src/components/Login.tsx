// src/components/Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "../lib/validation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleDummyUserSave = () => {
    // Dummy user data for testing
    const dummyUser = {
      name: "John Doe",
      email: "john@example.com",
      token: "dummy-auth-token",
    };

    // Save the dummy user to localStorage
    localStorage.setItem("user", JSON.stringify(dummyUser));

    // Assuming you want to redirect to the intended route after saving the dummy user
    const intendedRoute = localStorage.getItem("intendedRoute");
    if (intendedRoute) {
      localStorage.removeItem("intendedRoute");
      window.location.href = intendedRoute;
    }
  };

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`mt-1 p-2 w-full rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`mt-1 p-2 w-full rounded border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
