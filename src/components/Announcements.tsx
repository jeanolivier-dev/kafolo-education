import React from "react";

export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-kafedu-950 text-xl font-semibold">Annonces</h1>
        <span className="text-xs">Tout voir</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-kafedu-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-kafedu-950 font-medium">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-kafedu-950 text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-kafedu-950 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-kafedu-400 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-kafedu-600 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
}
