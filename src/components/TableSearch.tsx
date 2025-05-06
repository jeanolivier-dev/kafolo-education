import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";

export default function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-kafedu-300 px-2">
      <Search size={14} className="text-kafedu-900" />
      <input
        type="text"
        placeholder="Recherche ..."
        className="w-[200px] p-2 bg-transparent outline-none text-kafedu-900"
      />
    </div>
  );
}
