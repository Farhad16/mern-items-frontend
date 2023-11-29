import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "../lib/validation";
import { Link } from "react-router-dom";
import { loginUser } from "../apis/auth.api";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { simplifyError } from "../utils/error.util";
import { useAuth } from "../components/auth/AuthContext";
import { getUser } from "../utils/getUser";

const Login = () => {
  const location = useLocation();
  const history = useNavigate();
  const { setUser } = useAuth();

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

  const onSubmit = async (values: any) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await loginUser(formData);
      toast.success("Login success", {
        position: "top-right",
        autoClose: 2000,
      });
      const user = getUser();
      setUser(user);
      if (response) {
        const redirectUrl = location.state?.from || "/";
        history(redirectUrl);
      }
    } catch (error) {
      const err = simplifyError(error);
      toast.error(err, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <form
      className="bg-white p-8 rounded shadow-md w-96 h-full flex flex-col"
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
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none outline-none"
      >
        Login
      </button>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
