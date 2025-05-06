import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Titre",
    accessor: "title",
  },
  {
    header: "Classe",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Heure de début",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Heure de fin",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

export default function page() {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-kafedu-50 transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Tous les évènements
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-kafedu-400">
              {/* <Image src="/filter.png" alt="" width={14} height={14} /> */}
              <SlidersHorizontal size={16} className="text-white" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-kafedu-400">
              {/* <Image src="/sort.png" alt="" width={14} height={14} /> */}
              <ArrowDownWideNarrow size={16} className="text-white" />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}
