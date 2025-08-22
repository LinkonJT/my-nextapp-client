"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        toast.error(res.error || "Invalid credentials");
      } else {
        toast.success("Logged in successfully!");
        form.reset();
        // SPA redirect
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-6"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-lg md:text-xl">Login</legend>

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input w-full"
          required
        />

        <label className="label mt-2">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input w-full"
          required
        />

        <button
          type="submit"
          className="btn btn-neutral mt-4 w-full bg-amber-400 rounded-sm hover:text-black"
          disabled={loading}
        >
          {loading ? <span className="loading loading-dots"></span> : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn bg-amber-400 hover:text-black w-full rounded-sm mt-2 flex items-center justify-center gap-2"
          disabled={loading}
        >
          <FcGoogle size={24} /> Login with Google
        </button>

        <p className="mt-3 text-sm text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 underline">
            Register!
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default LoginForm;
