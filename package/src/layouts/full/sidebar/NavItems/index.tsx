import React from "react";
import { ChildItem } from "../Sidebaritems";
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
      <Link
        to={item.url!}
        target={item.isPro ? '_blank' : '_self'}
        className={`flex items-center gap-3 px-4 py-3 rounded-full text-15 transition-all duration-300 ${item.url == pathname
            ? "text-primary bg-lightprimary hover:text-primary hover:bg-lightprimary dark:hover:text-primary active"
            : "text-link bg-transparent group/link hover:bg-lightprimary hover:text-primary"
          } `}
      >
        <div className="flex items-center justify-between w-full">
          <span className="flex gap-3 align-center items-center">
            {item.icon ? (
              <Icon icon={item.icon} className={`${item.color}`} height={18} />
            ) : (
              <span
                className={`${item.url == pathname
                    ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary bg-primary! h-[6px] w-[6px]"
                    : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
                  } `}
              ></span>
            )}
            <span
              className={`max-w-32 text-ellipsis overflow-x-hidden whitespace-nowrap`}
            >
              {item.name}
            </span>
          </span>
          {item.isPro ? <span className="py-0 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full">Pro</span> : null}
        </div>
      </Link>
    </>
  );
};

export default NavItems;
