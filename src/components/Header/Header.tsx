"use client";

import { useEffect, useRef, useState } from "react";

import { Badge, ConfigProvider, Tooltip } from "antd";
// import { useUserLogoutMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";
import SearchField from "./SearchField";
const Header = () => {
  const [color, setColor] = useState<boolean>(false);

  const myRef = useRef<HTMLLIElement>(null);

  //   const itemss = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1 },
  //   };

  const ChangeColor = () => {
    if (typeof window !== "undefined") {
      if (window.pageXOffset > 80) {
        setColor(true);
      }
    } else {
      setColor(false);
    }

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeColor);
    return () => {
      window.removeEventListener("scroll", ChangeColor);
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#1677ff",
          colorIcon: "#1677ff",
        },
      }}
    >
      {/* <TopHeader /> */}
      {/* <motion.div
          variants={container}
          animate="show"
          initial="hidden"
          className={`${
            color ? "2xl:w-with 2xl:mx-auto" : "2xl:mx-auto xl:mx-10"
          }  `}
        >
          <motion.div
            variants={itemss}
            className={`${
              color
                ? "bg-white transition duration-100 z-50 fixed overflow-hidden top-0 2x:mx-auto 2xl:w-with 2xl:mx-auto w-full border-b py-2 lg:py-0"
                : " bg-white"
            } transition duration-900 overflow-hidden`}
          ></motion.div>
          </motion.div> */}

      <div
        className={`bg-bg-color-1 fixed top-0 left-0 right-0 z-50 block leading-8 ${
          color
            ? "py-3  md:py-0 border-b shadow-sm"
            : "pb-2 md:pb-0 border-b shadow-sm"
        }`}
      >
        <div className="2xl:w-with mx-auto">
          <div className="md:flex items-center justify-between ml-4 mr-4 md:mr-9">
            <ul
              className={`flex items-end justify-between md:justify-end text-xl md:text-lg font-semibold`}
            >
              <li className="hidden md:block xl:hidden">
                {/* <DynamicDrawer
                  ComponentName={MenuDrawer}
                  UnorderedListOutlined={UnorderedListOutlined}
                /> */}
              </li>
              <li
                className={`${color ? "hidden md:hidden" : "flex md:hidden"}`}
              >
                {/* <UnorderedListOutlined
                style={{ fontSize: "20px", color: "#222222" }}
              /> */}
                {/* <DynamicDrawer
                  ComponentName={MenuDrawer}
                  UnorderedListOutlined={UnorderedListOutlined}
                /> */}
              </li>
              <li className={`${color ? "hidden md:flex" : "flex"}`}>
                <Link href={`/`} className="text-text-color">
                  {/* <Image
                    src={LOGO}
                    width={150}
                    height={70}
                    alt="image"
                    style={{ borderRadius: 30 }}
                    id="logo-img"
                  /> */}
                  TABS
                  {/* <span className="text-textGreenColor">Gunma Halal Food</span>{" "} */}
                </Link>
              </li>
              {/* <li className="flex justify-end">
                <ul>
                  <li
                    className={` ${
                      pointiIsLoading
                        ? ""
                        : "text-textWhite bg-bgColor rounded-full text-normal font-semibold px-4"
                    }  md:hidden`}
                  >
                    {pointiIsLoading
                      ? ""
                      : isNaN(parseInt(points?.data?.customer_point))
                      ? 0
                      : parseInt(points?.data?.customer_point)}
                  </li>
                </ul>
              </li> */}
              <li
                // className={` ${
                //   pointiIsLoading
                //     ? ""
                //     : "text-textWhite bg-bgColor rounded-full text-normal font-semibold px-2 md:px-4"
                // }`}
                className={`${color ? "hidden md:hidden" : "flex md:hidden"}`}
              >
                <ul className="flex items-center space-x-2 mr-3">
                  <li className="hidden xl:flex items-center">
                    <ul>
                      <li className="">
                        <small>Achieved</small>
                      </li>
                      <li className="font-semibold -mt-1">Point</li>
                    </ul>
                  </li>
                </ul>
                {/* {pointiIsLoading
                  ? ""
                  : isNaN(parseInt(points?.data?.customer_point))
                  ? 0
                  : parseInt(points?.data?.customer_point)} */}
              </li>
            </ul>
            <div className="hidden lg:block">
              <ul className="flex gap-5 lg:gap-5 xl:gap-10 text-text-color text-base leading-6">
                {/* <li>
                  <Link href={`/`}>
                    <span
                      className={`text-textBlackColor ${
                        pathname === `/`
                          ? "text-textGreenColor font-semibold underline"
                          : ""
                      }`}
                    >
                      Home
                    </span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href={`/shop`}>
                    <span
                      className={`text-textBlackColor ${
                        pathname === `/shop`
                          ? "text-textGreenColor font-semibold underline"
                          : ""
                      }`}
                    >
                      Shop
                    </span>
                  </Link>
                </li> */}
                {/* <li>
                  {" "}
                  <Link href={`/contact-us`}>
                    <span
                      className={`text-textBlackColor ${
                        pathname === `/contact-us`
                          ? "text-textGreenColor font-semibold underline"
                          : ""
                      }`}
                    >
                      Contact
                    </span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href={`/about`}>
                    <span
                      className={`text-textBlackColor ${
                        pathname === `/about`
                          ? "text-textGreenColor font-semibold underline"
                          : ""
                      }`}
                    >
                      About
                    </span>
                  </Link>
                </li> */}
                {/* <li>
                  {localToken ? (
                    <div onClick={handleLogout} className="cursor-pointer">
                      Logout
                    </div>
                  ) : (
                    <Link href={`/login`}>
                      <span className="text-textBlackColor">Sign Up</span>
                    </Link>
                  )}
                </li> */}
              </ul>
            </div>
            <ul className="flex items-center justify-center gap-3 md:gap-5 lg:gap-3 xl:gap-5">
              <li className="hidden">
                {/* <UnorderedListOutlined
                style={{ fontSize: "20px", color: "#222222" }}
              /> */}
                {/* <DynamicDrawer
                  ComponentName={MenuDrawer}
                  UnorderedListOutlined={UnorderedListOutlined}
                /> */}
              </li>
              <li className="w-[400px] md:w-[400px] xl:w-[700px]">
                <SearchField />
              </li>
            </ul>
            <ul className="hidden lg:flex items-center justify-center gap-3 md:gap-5 lg:gap-7 xl:gap-5">
              <li className="">
                <Link href={`/wishlist`} className="flex items-center">
                  <ul className="flex items-center space-x-2 text-text-color">
                    <li>
                      <Badge ref={myRef} count={0}>
                        {/* <PiHeartStraightThin
                          style={{ fontSize: "32px", color: "#222222" }}
                        /> */}
                      </Badge>
                    </li>
                    <li className="hidden xl:flex items-center">
                      <ul>
                        <li>
                          <small>Favorites</small>
                        </li>
                        <li className="font-semibold -mt-1">Wishlist</li>
                      </ul>
                    </li>
                  </ul>
                </Link>
              </li>
              <li ref={myRef} className=" cursor-pointer">
                <ul className="flex items-center space-x-2 text-text-color">
                  <li>
                    <Badge ref={myRef} count={0}>
                      <PiShoppingCartThin
                        style={{ fontSize: "32px", color: "#222222" }}
                      />
                    </Badge>
                  </li>
                  <li className="hidden xl:flex items-center">
                    <ul>
                      <li className="">
                        <small>Shopping</small>
                      </li>
                      <li className="font-semibold -mt-1">Cart</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
              // className={` ${
              //   pointiIsLoading
              //     ? ""
              //     : "text-textWhite bg-bgColor rounded-full text-normal font-semibold px-2 md:px-4"
              // }`}
              >
                <ul className="flex items-center space-x-2">
                  {/* <li>
                      <Badge
                        ref={myRef}
                        overflowCount={99999}
                      >
                        <Image
                          src={PointIcon}
                          alt="p"
                          width={32}
                          height={32}
                          style={{ width: 32, height: 32 }}
                        />
                      </Badge>
                    </li> */}
                  <li className="hidden xl:flex items-center">
                    <ul>
                      <li className="">
                        <small>Purchases</small>
                      </li>
                      <li className="font-semibold -mt-1">Point</li>
                    </ul>
                  </li>
                </ul>
                {/* {pointiIsLoading
                  ? ""
                  : isNaN(parseInt(points?.data?.customer_point))
                  ? 0
                  : parseInt(points?.data?.customer_point)} */}
              </li>
              <li className="cursor-pointer hidden lg:block">
                <Tooltip title="Click Here">
                  <Link href={"/login"}>
                    <div className="flex gap-5 lg:gap-10 text-text-color text-base leading-6 mr-3">
                      Login
                    </div>
                  </Link>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Header;
