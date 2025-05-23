import { Bell, Mail, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-kafedu-300 px-2">
        {/* <Image src="/search.png" alt="" width={14} height={14} /> */}
        <Search size={14} className="text-kafedu-900" />

        <input
          type="text"
          placeholder="Recherche ..."
          className="w-[200px] p-2 bg-transparent outline-none text-kafedu-900"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-kafedu-500 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          {/* <Image src="/message.png" alt="" width={20} height={20} /> */}
          <Mail size={20} className="text-white" />
        </div>
        <div className="bg-kafedu-500 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          {/* <Image src="/announcement.png" alt="" width={20} height={20} /> */}
          <Bell size={20} className="text-white" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-kafedu-900 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
