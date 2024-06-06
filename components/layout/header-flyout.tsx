import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { tinaField } from "tinacms/dist/react";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { GlobalHeader } from "../../tina/__generated__/types";
import { useTheme } from ".";

import { Actions } from "../util/actions";
import { useHeaderState } from "./header-hook";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}




export function HeaderFlyout({ data }: { data: GlobalHeader }) {
  const router = useRouter();
  const theme = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(JSON.stringify(data));
  const { logoImage } = data;
  const shouldCloseOnScroll = true,
  alwaysSticky = false,
  menuIsOpen = false

  const { isVisible, isAtTop, shouldStick } = useHeaderState(
    shouldCloseOnScroll,
    alwaysSticky,
    menuIsOpen
  )
  
  console.log('isVisible', isVisible)
  console.log('isAtTop', isAtTop)
  console.log('shouldStick', shouldStick)  


  const headerScroll = "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
  headerAtTop = "";
  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 text-blue-700 dark:text-blue-300 font-medium dark:border-blue-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
  };

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header
      className={`${isVisible ? 'translate-y-0 bg-gradient-to-r from-indigo-500' : "-translate-y-full" } ${isVisible && !shouldStick ? headerAtTop : "" } ${shouldStick && isVisible  ? headerScroll  : "notshouldStick" }  ${isVisible ? 'visibless' : "notisVisible" } ${isAtTop ? 'isAtTop' : "notisAtTop" } overflow-hidden ${data.variant === "sticky" ? ' fixed z-20 w-full' : ` ${headerColorCss} relative` }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{data.name}</span>
            <img
              className="h-16 w-auto"
              src={logoImage.src}
              alt={logoImage.alt}
            />
             <span data-tina-field={tinaField(data, "name")} className="font-semibold pt-2 text-gray-700">{data.name}</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
         { /* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
                </Popover> */ } 
                  <ul className="hidden sm:flex lg:flex lg:gap-x-12">
          {data.nav &&
            data.nav.map((item, i) => {
              const activeItem =
                (item.href === ""
                  ? router.asPath === "/"
                  : router.asPath.includes(item.href)) && isClient;
              return (
              
                <li
                  key={`${item.label}-${i}`}
                  className={`${
                    activeItem ? activeItemClasses[theme.color] : ""
                  }`}
                >
                  <Link
                    data-tina-field={tinaField(item, "label")}
                    href={`/${item.href}`}
                    className={`relative select-none text-sm leading-6 inline-block tracking-wide transition duration-150 ease-out hover:opacity-100  ${
                      activeItem ? `` : `opacity-70`
                    }`}
                  >
                    {item.label}
                    {activeItem && (
                      <svg
                        className={`absolute bottom-0 left-1/2 w-[180%] h-full -translate-x-1/2 -z-1 opacity-10 dark:opacity-15 ${
                          activeBackgroundClasses[theme.color]
                        }`}
                        preserveAspectRatio="none"
                        viewBox="0 0 230 230"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="230"
                          y="230"
                          width="230"
                          height="230"
                          transform="rotate(-180 230 230)"
                          fill="url(#paint0_radial_1_33)"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_1_33"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(345 230) rotate(90) scale(230 115)"
                          >
                            <stop stopColor="currentColor" />
                            <stop
                              offset="1"
                              stopColor="currentColor"
                              stopOpacity="0"
                            />
                          </radialGradient>
                        </defs>
                      </svg>
                    )}
                  </Link>
                </li>
              
              );
            })}
           </ul>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Actions */}
          {data.actions && (
            <Actions
              className="justify-center md:justify-start py-2"
              parentColor={data.color}
              actions={data.actions as any}
            />
          )}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto text-gray-900 dark:text-gray-100 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logoImage.src}
                alt={logoImage.alt}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {data.actions && (
                  <div className="py-6">
                    <Actions
                      className="justify-center md:justify-start py-2"
                      parentColor={data.color}
                      actions={data.actions as any}
                    />
                  </div>
                )}
                { /*
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <ul className="flex flex-col gap-4 py-2 font-light text-base">
                {data.nav &&
                  data.nav.map((item, i) => (
                    <li key={`${item.label}-${i}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded">
                      <Link
                        data-tina-field={tinaField(item, "label")}
                        href={`/${item.href}`}
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl leading-7 tracking-wide transition duration-150 ease-out hover:opacity-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
