"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { NO_PHOTO } from "@/constants/image";
import { Collapse, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LiaMinusSolid } from "react-icons/lia";
const { Panel } = Collapse;

export type ItemProps = {
  key: string;
  label: string;
  children: React.ReactNode | React.ReactElement;
  isTaken?: boolean;
  img: string;
};

type UMCollapseProps = {
  items: ItemProps[];
  onChange?: (el: string | string[] | "") => void;
  defaultActiveKey?: string | string[];
};

const SideBar = ({
  items,
  onChange,
}: //   defaultActiveKey = ["1"],
UMCollapseProps) => {
  // console.log(items);
  const router = useRouter();
  const pathname = usePathname();
  const d = pathname.split("/");

  const isValidUrl = (url: string) =>
    url?.startsWith("/") ||
    url?.startsWith(process.env.NEXT_PUBLIC_FRONTEND_PROTOCAL_HTTP!);

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            // contentBg: "#e0e1dd",
            contentPadding: 0,
            // padding: 5,
            headerPadding: "4px 6px",
            // headerBg: "#dff9fb",
            colorBorder: "#ffffff",
          },
        },
      }}
    >
      <Collapse
        onChange={onChange}
        expandIconPosition="end"
        collapsible="header"
        defaultActiveKey={[d[0]]}
        accordion
      >
        {items?.map((item: any) => {
          //   const ite = item.img !== null;
          // if (item?.img !== null) {
          // console.log("worked", item);
          // }

          if (
            item?.children &&
            Array?.isArray(item?.children) &&
            item?.children?.length > 0
          ) {
            return (
              <Panel
                header={
                  <ul
                    onClick={() => router.push(`/${item?.slug}`)}
                    className={`flex items-center justify-start space-x-2 ml-2 text-textBlackColor hover:text-textGreenColor transition-all duration-700 ease-in-out ${
                      d[1] !== "sub-category"
                        ? ""
                        : item?.slug === d[0]
                        ? "text-textGreenColor font-bold"
                        : ""
                    }`}
                  >
                    <li>
                      {isValidUrl(item?.img) ? (
                        <Image
                          src={
                            item && item?.img && item?.img !== "null"
                              ? item?.img
                              : NO_PHOTO
                          }
                          alt="category Image"
                          priority
                          width={30}
                          height={30}
                          id="category-sidebar-image"
                        />
                      ) : (
                        <Image
                          src={NO_PHOTO}
                          alt="category Image"
                          priority
                          width={30}
                          height={30}
                          id="category-sidebar-image"
                        />
                      )}
                    </li>
                    <li>{item?.label}</li>
                  </ul>
                }
                key={item?.key}
              >
                <ul>
                  {item?.children?.map((sub: any, index: number) => {
                    // console.log(sub.id === parseInt(d[2]));
                    // console.log(d[2]);
                    return (
                      <Link
                        key={index}
                        href={`/${sub?.slug}`}
                        className={`text-textBlackColor hover:bg-bgColor hover:bg-opacity-15 hover:text-textGreenColor transition-all duration-700 ease-in-out w-full ${
                          d[1] !== "sub-category"
                            ? ""
                            : sub.slug === d[0]
                            ? "text-textGreenColor font-bold"
                            : ""
                        }`}
                      >
                        <li
                          className={`flex items-center space-x-1 py-1 pl-8 cursor-pointer  ${
                            sub.slug === d[0] ? "" : ""
                          }`}
                        >
                          <span>
                            <LiaMinusSolid />
                          </span>{" "}
                          <span>{sub.title}</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </Panel>
            );
          } else {
            return (
              <Link
                href={`/${item?.slug}`}
                key={item.key}
                className={`flex items-center justify-start space-x-2 pl-1 lg:pl-1 ml-2 hover:bg-bgColor hover:bg-opacity-10 transition-all duration-700 ease-in-out hover:text-textGreenColor ${
                  d[0] !== "sub-category"
                    ? ""
                    : item?.key === d[0]
                    ? "text-textGreenColor font-bold"
                    : ""
                } text-textBlackColor 2xl:pl-1.5 py-1 `}
              >
                {isValidUrl(item?.img) ? (
                  <Image
                    src={item?.img !== null ? item?.img : NO_PHOTO}
                    alt="category Image"
                    priority
                    width={30}
                    height={30}
                    id="category-sidebar-image"
                  />
                ) : (
                  <Image
                    src={NO_PHOTO}
                    alt="category Image"
                    priority
                    width={30}
                    height={30}
                    id="category-sidebar-image"
                  />
                )}

                <ul className="">
                  <li>{item.label}</li>
                </ul>
              </Link>
            );
          }
        })}

        {/* <Collapse onChange={onChange} expandIconPosition="end">
        {items?.map((item) => {
          return (
            <Panel
              header={
                <ul className="flex items-center justify-start space-x-2">
                  <li>
                    <Image
                      src={item?.img}
                      alt="category Image"
                      priority
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>{item?.label}</li>
                </ul>
              }
              key={item?.key}
            >
              <ul>
                {item.children && Array.isArray(item.children)
                  ? item.children.map((sub, index) => (
                      <li key={index}>{sub.title}</li>
                    ))
                  : item.children}
              </ul>
            </Panel>
          );
        })} */}
      </Collapse>
    </ConfigProvider>
  );
};

export default SideBar;
