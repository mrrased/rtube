/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";
import SideBar, { ItemProps } from "./SideBar";
import { Skeleton } from "antd";
import { bag, house, information } from "@/constants/image";
import { useEffect, useState } from "react";

type ISubCategoryItem = {
  id: number;
  title: string;
};

export type ICategoryItem = {
  id: number;
  title: string;
  subCategory?: ISubCategoryItem[];
  isTaken: boolean;
  img: string;
  slug: string;
};

const SideBarComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const categories = [
    { id: 1, title: "Meat & Fish", isTaken: true, img: bag },
    {
      id: 2,
      title: "Beans & dry Fruit",
      isTaken: true,
      img: bag,
      subCategory: [
        { id: 1, title: "Meat" },
        { id: 2, title: "Chicken" },
        { id: 3, title: "Frozen Fish" },
        { id: 4, title: "Mutton" },
      ],
    },
    { id: 3, title: "Snacks & Beverage", isTaken: true, img: bag },
    {
      id: 4,
      title: "Cosmetics",
      isTaken: true,
      img: bag,
      subCategory: [
        { id: 1, title: "Meat" },
        { id: 2, title: "Chicken" },
        { id: 3, title: "Frozen Fish" },
        { id: 4, title: "Mutton" },
      ],
    },
  ];

  // const availableCourses: ItemProps[] = categories.map(
  //   (item: ICategoryItem, index: number) => {
  //     const children = item.subCategory?.map((subItem) => ({
  //       key: String(subItem.id),
  //       label: subItem.title,
  //     }));

  //     const obj = {
  //       key: String(item.id), // Convert index to string
  //       label: item.title,
  //       isTaken: item.isTaken,
  //       children,
  //     };

  //     return obj;
  //   }
  // );

  //   const categoryData = data?.getAllCategory?.data?.categories;
  // console.log(categoryData);

  const availableCourses: ItemProps[] = categories?.map((item: any) => {
    const obj = {
      key: item.id,
      label: item?.title,
      img: item.img,
      isTaken: item.isTaken,
      children: item.subCategory || [],
    };

    return obj;
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //   const datas: ItemProps[] = categoryData?.map((item: any) => {
  //     const obj = {
  //       key: item?.id,
  //       label: item?.title,
  //       img: item?.image,
  //       isTaken: item?.isTaken,
  //       slug: item.slug,
  //       children: item?.sub_categories || [],
  //     };
  //     return obj;
  //   });

  return (
    <div
      className={`hidden md:block bg-white border-r border-gray-300 h-screen z-50`}
    >
      <ul className="flex items-center justify-around pt-3">
        <li
          onClick={() => router.replace("/")}
          className={`px-4 py-1 border border-green-color rounded-md hover:bg-bgColor hover:text-white cursor-pointer transition duration-300  ${
            pathname === "/" ? "bg-bgColor text-white " : "text-textBlackColor"
          }`}
        >
          <ul>
            <li className="flex justify-center items-center">
              <Image
                src={house}
                alt="img"
                width={30}
                height={30}
                className="text-xl"
              />
            </li>
            <li>Home</li>
          </ul>
        </li>
        <li
          onClick={() => router.replace("/shop")}
          className={`px-4 py-1 border border-green-color rounded-md hover:bg-bgColor cursor-pointer transition duration-300 hover:text-white ${
            pathname === "/shop"
              ? "bg-bgColor text-white "
              : "text-textBlackColor"
          }`}
        >
          <ul>
            <li className="flex justify-center items-center">
              <Image
                src={bag}
                alt="img"
                width={30}
                height={30}
                className="text-xl"
              />
            </li>
            <li>Shop</li>
          </ul>
        </li>
        <li
          onClick={() => router.replace("/about")}
          className={`px-4 py-1 border border-green-color rounded-md hover:bg-bgColor hover:text-white cursor-pointer transition duration-300 ${
            pathname === "/about"
              ? "bg-bgColor text-white "
              : "text-textBlackColor"
          }`}
        >
          <ul>
            <li className="flex justify-center items-center">
              <Image
                src={information}
                alt="img"
                width={30}
                height={30}
                className="text-xl"
              />
            </li>
            <li>About</li>
          </ul>
        </li>
      </ul>
      {/* <ul className="space-y-3">
        {categories &&
          categories.map((item: ICategoryItem, i) => {
            return (
              <li key={i}>
                <ul className="flex items-center justify-between">
                  <li>
                    <Link href={`/category/${item.id}`}>
                      <span
                        className={`text-textBlackColor ${
                          pathname === `/category/${item.id}`
                            ? "text-textGreenColor font-semibold"
                            : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <AiOutlineDown />
                  </li>
                </ul>

                <ul className="ml-3">
                  {item.subCategory &&
                    item.subCategory.map((sub_category, i: number) => {
                      return <li key={i}>{sub_category.title}</li>;
                    })}
                </ul>
              </li>
            );
          })}
      </ul> */}

      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="border py-2 px-4">
            {/* <div className="flex justify-center">
              <Skeleton.Image
                style={{ width: 170, height: 100 }}
                className="mx-auto"
              />
            </div> */}
            <div className="mt-2">
              <Skeleton
                active
                title={false}
                paragraph={{
                  rows: 1,
                  width: ["100%"],
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="mt-4">
          <SideBar
            items={availableCourses}
            // defaultActiveKey={availableCourses?.map((item) => item.key)}
          />
        </div>
      )}
    </div>
  );
};

export default SideBarComponent;
