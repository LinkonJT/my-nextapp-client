"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductHighlight = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/wallpapers");
        const data = await res.json();
        setProducts(data.slice(0, 3)); 
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-12 px-4 w-10/12  mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-400">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-200 shadow-md rounded-lg">
            <img
              src={product.photoURL}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-sm mt-2">{product.details.slice(0, 60)}...</p>
              <p className="mt-2 font-semibold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/products" className="btn bg-amber-400 hover:text-black rounded-md">
          See More
        </Link>
      </div>
    </div>
  );
};

export default ProductHighlight;
