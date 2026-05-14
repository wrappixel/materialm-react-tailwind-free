
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import React from "react";
import FullLogo from "../shared/logo/FullLogo";
import Upgrade from "./Upgrade";
import NavCollapse from "./NavCollapse";

const SidebarLayout = () => {


  return (
    <>
      <div className="xl:block hidden">
        <aside
          className="fixed menu-sidebar w-[270px] h-full bg-sidebar rtl:pe-4 rtl:ps-0 top-[72px] border-r border-ld"
          aria-label="Sidebar"
        >
          <div className="px-6 py-4 flex items-center sidebarlogo">
            <FullLogo />
          </div>
          <SimpleBar className="h-[calc(100vh-294px)]">
            <div className="px-5 mt-2">
              <nav className="sidebar-nav hide-menu flex flex-col gap-1">
                {SidebarContent &&
                  SidebarContent?.map((item, index) => (
                    <div className="caption mb-4" key={item.heading}>
                      <React.Fragment key={index}>
                        <h5 className="text-link dark:text-white/70 font-semibold leading-6 text-sm pb-2">
                          {item.heading}
                        </h5>
                        <div className="flex flex-col gap-1">
                          {item.children?.map((child, index) => (
                            <React.Fragment key={child.id && index}>
                              {child.children ? (
                                <div className="collpase-items">
                                  <NavCollapse item={child} />
                                </div>
                              ) : (
                                <NavItems item={child} />
                              )}
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
        </aside>
      </div>
    </>
  );
};

export default SidebarLayout;
