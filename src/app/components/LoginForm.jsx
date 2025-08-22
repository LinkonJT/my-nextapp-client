"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Logged in successfully!");
        form.reset();
        // You can redirect after login if needed
      } else {
        toast.error(result.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6">
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

        <button type="button" className="btn bg-amber-400 hover:text-black w-full rounded-sm">
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
