"use client";

import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-5">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center text-amber-400">About WallScape</h1>

      <p className="text-md md:text-lg mb-6 leading-relaxed text-gray-300">
        Welcome to <span className="font-semibold">WallScape</span>, your go-to
        destination for high-quality sports and athletic wallpapers. Founded in
        2024, we are a passionate startup dedicated to bringing fans closer to
        their favorite athletes and sports. Whether you’re a die-hard football
        fan, a cricket enthusiast, a basketball lover, or even a WWE follower,
        we’ve got something special for you.
      </p>

      <p className="text-md md:text-lg mb-6 leading-relaxed text-gray-300">
        At WallScape, we believe that a wall should tell a story—your story. Our
        wallpapers capture the energy, passion, and spirit of sports in stunning
        detail, transforming your space into a personal arena of inspiration.
      </p>

      <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4">Wallpaper Sizes</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Small: 18 x 24 inches</li>
        <li>Medium: 24 x 36 inches</li>
        <li>Large: 36 x 48 inches</li>
        <li>XL: 48 x 72 inches</li>
      </ul>

      <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4">Printing & Material Options</h2>
      <ul className="list-disc pl-6 text-gray-300">
        <li>
          <span className="font-semibold">Standard Matte Finish</span> – Durable
          and budget-friendly, perfect for everyday spaces.
        </li>
        <li>
          <span className="font-semibold">Premium Glossy Vinyl</span> – A
          high-definition, vibrant option with long-lasting quality for fans who
          want the best.
        </li>
      </ul>

      <p className="text-md md:text-lg mt-8 leading-relaxed text-gray-300">
        Our mission is simple: to empower sports lovers to showcase their
        passion on their walls. Every wallpaper is carefully designed and
        printed with precision to ensure the highest quality. As we continue to
        grow, we are committed to expanding our catalog with more athletes,
        sports, and creative designs.
      </p>

      <p className="text-md md:text-lg mt-4 leading-relaxed text-gray-300">
        Join us on this journey and make your walls a true reflection of your
        athletic spirit. With WallScape, you don’t just decorate—you celebrate
        the game.
      </p>
    </div>
  );
};

export default About;
