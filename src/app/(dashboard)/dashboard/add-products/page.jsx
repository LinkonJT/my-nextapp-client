"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;
  const data = {
  title: form.title.value,
  details: form.details.value,
  photoURL: form.photoURL.value,
  sizeAvailable: form.sizeAvailable.value,
  currentSize: form.currentSize.value,
  printType: form.printType.value,
  price: parseInt(form.price.value),
  };

  try {
    const res = await fetch("/api/wallpapers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success("Product added successfully!");
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-amber-400">Add Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

          <label className="label">Wallpaper Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Wallpaper title"
            required
          />

          <label className="label">Wallpaper Details</label>
          <textarea
            placeholder="Details"
            className="textarea textarea-bordered w-full"
            name="details"
            required
          ></textarea>

          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            
            className="input input-bordered w-full"
            placeholder="https://example.com/wallpaper.jpg"
            required
          />

          <label className="label">Size Available</label>
          <select defaultValue="" name="sizeAvailable"  className="select w-full" required>
            <option disabled value="">
              Pick available sizes
            </option>
            <option>Small, Large</option>
            <option>Large, Medium, Giant</option>
            <option>Giant</option>
            <option>Large</option>
            <option>S, M, L, Giant</option>
          </select>

          <label className="label">Pick Current Size</label>
          <select defaultValue="" name="currentSize" className="select w-full" required>
            <option disabled value="">
              Pick a size
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Giant</option>
          </select>

          <label className="label">Print Type</label>
          <select defaultValue="" name="printType" className="select w-full" required>
            <option disabled value="">
              Pick a print type
            </option>
            <option>Standard Matte Finish</option>
            <option>Premium Glossy Vinyl</option>
          </select>

          <label className="label">Price ($)</label>
          <select defaultValue="" name="price" className="select w-full" required>
            <option disabled value="">
              Pick a price
            </option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </fieldset>

        <button
          type="submit"
          className="btn btn-sm md:btn-md rounded-md bg-amber-400 hover:text-black"
          disabled={loading}
        >
          {loading ? <span className="loading loading-dots"></span> : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
