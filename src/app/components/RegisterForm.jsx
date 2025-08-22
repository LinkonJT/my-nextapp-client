"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Registered successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-lg md:text-xl">Register Here</legend>

        <label className="label">Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="input w-full"
          required
        />

        <label className="label mt-2">Email</label>
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
          className="btn btn-neutral mt-4 w-full bg-amber-400 rounded-sm text-black"
          disabled={loading}
        >
          {loading ? <span className="loading loading-dots"></span> : "Register"}
        </button>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
