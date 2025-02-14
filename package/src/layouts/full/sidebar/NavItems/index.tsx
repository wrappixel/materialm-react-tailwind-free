import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router";



interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Sidebar.Item
        to={item.url}
        as={Link}
        className={` font-medium text-[15px] ${
          item.url == pathname
            ? "text-primary bg-lightprimary rounded-full hover:text-primary hover:bg-lightprimary dark:hover:text-primary active"
            : "text-link bg-transparent group/link hover:bg-lightprimary hover:text-primary"
        } `}
      >
        <span className="flex gap-3 align-center items-center">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                  : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
              } `}
            ></span>
          )}
          <span
            className={`max-w-36 overflow-hidden`}
          >
            {item.name}
          </span>
        </span> 
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
