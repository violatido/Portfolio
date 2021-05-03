import React from "react";
import image from "../bkgd-img.jpg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="background- orange/pink textured wallpaper" 
        className="absolute object-cover w-full h-full" 
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi! I'm Ilana</h1>
      </section>
    </main>
  );
}