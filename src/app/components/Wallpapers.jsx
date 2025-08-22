"use client";

import React, { useEffect, useState } from "react";

const Wallpapers = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/wallpapers")
      .then((res) => res.json())
      .then((data) => {
        setWallpapers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading wallpapers...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-5">
      {wallpapers.map((wallpaper, index) => (
        <div key={wallpaper._id} className="card bg-base-100 w-70 shadow-sm">
          <figure className="h-48 overflow-hidden">
            <img
              src={wallpaper.photoURL}
              alt={wallpaper.title}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{wallpaper.title}</h2>
            <p>Size: {wallpaper.currentSize}</p>
            <p>price: ${wallpaper.price}</p>
            <div className="card-actions justify-end">
              {/* Details button opens modal */}
              <button
                className="btn rounded-md bg-amber-400"
                onClick={() =>
                  document.getElementById(`modal_${index}`).showModal()
                }
              >
                Details
              </button>
            </div>
          </div>

          {/* Modal for this wallpaper */}
          <dialog id={`modal_${index}`} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-xl">{wallpaper.title}</h3>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <img
                  src={wallpaper.photoURL}
                  alt={wallpaper.title}
                  className="w-full md:w-1/2 h-64 object-cover rounded-md"
                />
                <div className="md:w-1/2">
                  <p className="mb-2"><strong>Details:</strong> {wallpaper.details}</p>
                  
                  <p className="mb-2"><strong>Available Sizes:</strong> {wallpaper.sizeAvailable}</p>
                  <p className="mb-2"><strong>Print Type:</strong> {wallpaper.printType}</p>
                  <p className="mb-2"><strong>Size:</strong> {wallpaper.currentSize}</p>
                  <p className="mb-2"><strong>Price:</strong> ${wallpaper.price}</p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  <button className="btn bg-amber-400 rounded-md">Buy</button>
                  <button className="btn btn-outline rounded-md">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </div>
  );
};

export default Wallpapers;
