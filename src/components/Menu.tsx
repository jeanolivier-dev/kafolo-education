import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Home,
  GraduationCap,
  Users,
  UserPlus,
  BookOpen,
  School,
  BookMarked,
  FileSpreadsheet,
  ClipboardList,
  Award,
  ClipboardCheck,
  Calendar,
  MessageSquare,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: Home,
        label: "Accueil",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Enseignants",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "Etudiants",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserPlus,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookOpen,
        label: "Matières",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: School,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookMarked,
        label: "Cours",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: FileSpreadsheet,
        label: "Evaluations",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ClipboardList,
        label: "Affectation",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Award,
        label: "Resultats",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ClipboardCheck,
        label: "Présences",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Calendar,
        label: "Evènements",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MessageSquare,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Bell,
        label: "Annonces",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "Autres",
    items: [
      {
        icon: User,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings,
        label: "Paramètres",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "Déconnexion",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="mt-4 text-sm h-screen max-h-screen overflow-y-auto">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes("admin")) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-800 py-2 md:px-2 rounded-md hover:bg-kafedu-100"
                >
                  <item.icon className="h-5 w-5 text-gray-800" />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
