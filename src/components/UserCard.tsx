import Image from "next/image";
import React from "react";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-kafedu-600 even:bg-kafedu-400 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-kafedu-950">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-white text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-white">{type}s</h2>
    </div>
  );
}
