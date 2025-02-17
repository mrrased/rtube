import { ConfigProvider, Dropdown, Input, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const SearchField = () => {
  const [searchData, setSearchData] = useState<string | undefined>("");
  const { Search } = Input;

  console.log(searchData);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  // console.log(pt);

  const handleDropdownOpenChange = (open: boolean) => {
    if (!open) {
      // Close hobar shomoy sea
      setSearchData("");
    }
  };

  //   const items: MenuProps["items"] = data
  //     ?.map((item: any, i: number) => [
  //       {
  //         key: `item-${i}`,
  //         label: (
  //           <Link href={`/details/${item?.slug}`}>
  //             <ul className="flex justify-between items-center text-textBlackColor font-normal">
  //               <li className="md:hidden">
  //                 {item?.title?.length >= 34
  //                   ? `${item?.title?.slice(0, 34)}...`
  //                   : item?.title}
  //               </li>
  //               <li className="hidden md:block">{item?.title}</li>
  //               <li>
  //                 {item?.stocks?.length
  //                   ? `¥ ${item?.stocks[0]?.online_price}`
  //                   : ""}
  //               </li>
  //             </ul>
  //           </Link>
  //         ),
  //         icon: (
  //           <Image
  //             src={item?.images?.length ? item?.images[0].image : NO_PHOTO}
  //             alt="image"
  //             width={50}
  //             height={50}
  //           />
  //         ),
  //       },
  //       {
  //         type: "divider",
  //       },
  //     ])
  //     .flat();

  //   const suffix = (
  //     <AudioOutlined
  //       style={{
  //         fontSize: 16,
  //         color: "#0DA487",
  //       }}
  //     />
  //   );

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorText: "#666666",
            colorIcon: "#1677ff",
            colorPrimary: "#0DA487",
            colorBgContainer: "#f7f7f7",
            colorTextPlaceholder: "#222222",
          },
        }}
      >
        <Dropdown
          overlay={
            <Menu
              items={items}
              style={{
                // width: "700px",
                maxHeight: "400px",
                overflowY: "auto",
              }}
              // className="md:w-[700px] max-h-[300px]  md:max-h-[400px]"
            />
          }
          placement="bottom"
          // arrow={{ pointAtCenter: true }}
          overlayStyle={{ paddingTop: "1px" }}
          trigger={["click"]}
          //   visible={searchQuery?.length > 0}
          onOpenChange={handleDropdownOpenChange}
        >
          <Search
            size="large"
            placeholder="Search For..."
            // onChange={(e) => dispatch(setSearch(e.target.value))}
            // style={{ color: "#000", }}
            // suffix={suffix}
            enterButton
          />
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};

export default SearchField;
