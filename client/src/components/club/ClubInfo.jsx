import { Image } from "antd";
import React from "react";

function ClubInfo({ name, description }) {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-xl my-6 mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-4 space-x-4">
        <Image
          className="rounded-full border-4 border-blue-500 shadow-lg"
          src="https://i.postimg.cc/bNfSzkM3/hackslash2.png"
          alt={name}
          width={80}
          height={80}
        />
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </section>
  );
}

export default ClubInfo;
