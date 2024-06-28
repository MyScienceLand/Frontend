/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Children, Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { VscBellDot } from "react-icons/vsc";
import { IoExpandSharp } from "react-icons/io5";
import { GiGreekTemple } from "react-icons/gi";
import { LuFiles } from "react-icons/lu";

import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Content,
  Dashboard,
  Logo,
  LogoWhite,
  PurpleLogoWithText,
  Quiz,
  logo,
} from "../../../assets";
import { IoAddCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: <GiGreekTemple />, current: true },
  { name: "Content", href: "#", icon: <LuFiles />, current: false },
  { name: "Quiz", href: "#", icon: <SlCalender />, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TailwindSidebar({ sidebarOpen, handleDrawerOpen }) {
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  let pathName = location.pathname;

  const shouldRenderSidebar =
    pathName.includes("/student-dashboard") ||
    pathName.includes("/course-content") ||
    pathName.includes("/next-quiz") ||
    pathName.includes("/quiz-desktop") ||
    pathName.includes("/cells") ||
    pathName.includes("/quiz-summary") ||
    pathName.includes("/managment-classes") ||
    pathName.includes("/managment-dashboard") ||
    pathName.includes("/create-class") ||
    pathName.includes("/create-user") ||
    pathName.includes("/teacher-list") ||
    pathName.includes("/create-student") ||
    pathName.includes("/select-class");
  const shouldRenderNavBar =
    pathName.includes("/student-dashboard") ||
    pathName.includes("/course-content") ||
    pathName.includes("/next-quiz") ||
    pathName.includes("/quiz-desktop") ||
    pathName.includes("/cells") ||
    pathName.includes("/quiz-summary") ||
    pathName.includes("/managment-classes") ||
    pathName.includes("/managment-dashboard") ||
    pathName.includes("/create-class") ||
    pathName.includes("/create-user") ||
    pathName.includes("/teacher-list") ||
    pathName.includes("/create-student") ||
    pathName.includes("/select-class");
  const SidebarColor = pathName.includes("/managment-classes");
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-white">
        <body className="h-full">
        ```
      */}
      <>
        {shouldRenderSidebar && (
          <>
            {!sidebarOpen ? (
              <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col transition-all duration-300">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div
                  className={`${
                    pathName.includes("/course-content") ||
                    pathName.includes("/next-quiz") ||
                    pathName.includes("/quiz-desktop") ||
                    pathName.includes("/cells") ||
                    pathName.includes("/quiz-summary") ||
                    pathName.includes("/student-dashboard")
                      ? "flex grow flex-col gap-y-5 overflow-y-auto bg-white pb-4 shadow-right"
                      : "flex grow flex-col gap-y-5 overflow-y-auto bg-primary pb-4 shadow-right"
                  }`}
                >
                  {!SidebarColor && (
                    <div className="flex h-16 justify-center my-8 shrink-0 items-center">
                      {pathName.includes("/course-content") ||
                      pathName.includes("/next-quiz") ||
                      pathName.includes("/quiz-desktop") ||
                      pathName.includes("/cells") ||
                      pathName.includes("/quiz-summary") ||
                      pathName.includes("/student-dashboard") ? (
                        <img
                          className="w-24"
                          src={PurpleLogoWithText}
                          alt="First Image"
                        />
                      ) : (
                        <img className="" src={Logo} alt="Second Image" />
                      )}
                    </div>
                  )}

                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => {
                            const isActive = item.current;
                            const isPathMatch =
                              pathName.includes("/course-content") ||
                              pathName.includes("/next-quiz") ||
                              pathName.includes("/quiz-desktop") ||
                              pathName.includes("/cells") ||
                              pathName.includes("/quiz-summary") ||
                              pathName.includes("/managment-dashboard") ||
                              pathName.includes("/teacher-list");

                            return (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    isActive && isPathMatch
                                      ? "bg-primary rounded-tr-lg px-12 text-white"
                                      : isActive
                                      ? "bg-primary text-white rounded-tr-lg px-12"
                                      : "text-primary px-12 hover:text-primary hover:bg-white",
                                    "group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <div>{item.icon}</div>
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            ) : (
              <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-28 lg:flex-col transition-all duration-300">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div
                  className={`${
                    pathName.includes("/course-content") ||
                    pathName.includes("/next-quiz") ||
                    pathName.includes("/quiz-desktop") ||
                    pathName.includes("/cells") ||
                    pathName.includes("/quiz-summary") ||
                    pathName.includes("/student-dashboard")
                      ? "flex grow flex-col gap-y-5 overflow-y-auto bg-white pb-4 shadow-right"
                      : "flex grow flex-col gap-y-5 overflow-y-auto bg-primary pb-4 shadow-right"
                  }`}
                >
                  {!SidebarColor && (
                    <div className="flex h-16 justify-center my-8 shrink-0 items-center">
                      {pathName.includes("/course-content") ||
                      pathName.includes("/next-quiz") ||
                      pathName.includes("/quiz-desktop") ||
                      pathName.includes("/cells") ||
                      pathName.includes("/quiz-summary") ||
                      pathName.includes("/student-dashboard") ? (
                        <img className="w-12" src={Logo} alt="First Image" />
                      ) : (
                        <img className="" src={Logo} alt="Second Image" />
                      )}
                    </div>
                  )}

                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => {
                            const isActive = item.current;
                            const isPathMatch =
                              pathName.includes("/course-content") ||
                              pathName.includes("/next-quiz") ||
                              pathName.includes("/quiz-desktop") ||
                              pathName.includes("/cells") ||
                              pathName.includes("/quiz-summary") ||
                              pathName.includes("/managment-dashboard") ||
                              pathName.includes("/teacher-list");

                            return (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    isActive && isPathMatch
                                      ? "bg-primary rounded-tr-lg px-12 text-white"
                                      : isActive
                                      ? "bg-primary text-white rounded-tr-lg px-12"
                                      : "text-primary px-12 hover:text-primary hover:bg-white",
                                    "group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <div>{item.icon}</div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </>
        )}
      </>
    </>
  );
}
