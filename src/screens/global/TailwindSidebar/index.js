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
  Quiz,
  logo,
} from "../../../assets";
import { IoAddCircleOutline } from "react-icons/io5";

import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: "", current: true },
  { name: "Content", href: "#", icon: "", current: false },
  { name: "Quiz", href: "#", icon: "", current: false },
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

export default function TailwindSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  let pathName = location.pathname;
  console.log("🚀 ~ Sidebar ~ pathName:", pathName);
  console.log(pathName.includes("/quiz"));
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
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <>
        {shouldRenderSidebar && (
          <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                className="relative z-50 lg:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-900/80" />
                </Transition.Child>

                <div className="fixed inset-0 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                          <button
                            type="button"
                            className="-m-2.5 p-2.5"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      {/* Sidebar component, swap this element with another sidebar if you like */}
                      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                          />
                        </div>
                        <nav className="flex flex-1 flex-col">
                          <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                          >
                            <li>
                              <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-50 text-indigo-600"
                                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          item.current
                                            ? "text-indigo-600"
                                            : "text-gray-400 group-hover:text-indigo-600",
                                          "h-6 w-6 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li>
                              <div className="text-xs font-semibold leading-6 text-gray-400">
                                Your teams
                              </div>
                              <ul role="list" className="-mx-2 mt-2 space-y-1">
                                {teams.map((team) => (
                                  <li key={team.name}>
                                    <a
                                      href={team.href}
                                      className={classNames(
                                        team.current
                                          ? "bg-gray-50 text-indigo-600"
                                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                      )}
                                    >
                                      <span
                                        className={classNames(
                                          team.current
                                            ? "text-indigo-600 border-indigo-600"
                                            : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                        )}
                                      >
                                        {team.initial}
                                      </span>
                                      <span className="truncate">
                                        {team.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                            <li className="mt-auto">
                              <a
                                href="#"
                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                              >
                                <Cog6ToothIcon
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                  aria-hidden="true"
                                />
                                Settings
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
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
                      <img className="w-24" src={Logo} alt="First Image" />
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
                                <img src={item.icon} alt={item.name} />
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

            {/* mobile sidebar */}
            <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full flex justify-center pb-4 bg-white border-t border-gray-200">
              <nav className="flex justify-center gap-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
        <div
          className={`${
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
            pathName.includes("/select-class")
              ? "lg:pl-72"
              : null
          }`}
        >
          {/* <div className="bg-[#f0f1f7] px-8 py-6">
            <DefaultLayout>{Children}</DefaultLayout>
          </div> */}
        </div>
      </>
    </>
  );
}
