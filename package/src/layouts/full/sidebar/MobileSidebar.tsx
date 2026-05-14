
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import React from "react";
import FullLogo from "../shared/logo/FullLogo";
import 'simplebar-react/dist/simplebar.min.css';
import Upgrade from "./Upgrade";

const MobileSidebar = () => {
  return (
    <>
      <div className="h-full bg-white dark:bg-darkgray">
        <div className="px-5 py-4 pb-7 flex items-center sidebarlogo">
          <FullLogo />
        </div>
        <SimpleBar className="h-[calc(100vh-242px)]">
          <div className="px-5 mt-2">
            <nav className="sidebar-nav hide-menu flex flex-col gap-1">
              {SidebarContent &&
                SidebarContent?.map((item, index) => (
                  <div className="caption mb-4" key={item.heading}>
                    <React.Fragment key={index}>
                      <h5 className="text-link dark:text-white/70 font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                        {item.heading}
                      </h5>
                      <div className="flex flex-col gap-1">
                        {item.children?.map((child, index) => (
                          <React.Fragment key={child.id && index}>
                              <NavItems item={child} />
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  </div>
                ))}
            </nav>
          </div>
        </SimpleBar>
        <Upgrade/>
      </div>
    </>
  );
};

export default MobileSidebar;
