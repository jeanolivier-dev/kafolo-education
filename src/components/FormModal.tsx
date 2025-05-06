"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

// Définition du type pour les fonctions de formulaire
type FormFunction = (type: "create" | "update", data?: any) => React.ReactNode;

// Création de l'objet forms avec les fonctions pour chaque table
const forms: Record<string, FormFunction> = {
  teacher: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les enseignants */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un enseignant
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <div className="flex flex-col">
        <label>Nom</label>
        <input
          type="text"
          className="border rounded-md p-2"
          defaultValue={data?.name || ""}
        />
      </div>
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  student: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les étudiants */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un étudiant
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  parent: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les parents */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un parent
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  subject: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les matières */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} une matière
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  class: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les classes */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} une classe
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  lesson: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les leçons */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} une leçon
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  exam: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les examens */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un examen
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  assignment: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les devoirs */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un devoir
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  result: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les résultats */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un résultat
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  attendance: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les présences */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} une présence
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  event: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les événements */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} un événement
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
  announcement: (type, data) => (
    <form className="p-4 flex flex-col gap-4">
      {/* Formulaire pour les annonces */}
      <h3 className="text-xl font-medium">
        {type === "create" ? "Ajouter" : "Modifier"} une annonce
      </h3>
      {/* Ajoutez vos champs de formulaire ici */}
      <button
        type="submit"
        className="bg-kafedu-400 text-white py-2 px-4 rounded-md border-none w-max self-center"
      >
        {type === "create" ? "Ajouter" : "Modifier"}
      </button>
    </form>
  ),
};

export default function FormModal({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-kafedu-400"
      : type === "update"
      ? "bg-kafedu-400"
      : "bg-kafedu-400";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Toutes les données seront perdues. Êtes-vous sûr de vouloir supprimer{" "}
          {table}?
        </span>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Supprimer
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Aucune donnée n'a été trouvée !"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
