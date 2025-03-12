import { FC } from 'react';
import { Link, Outlet } from "react-router";
import ScrollToTop from 'src/components/shared/ScrollToTop';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Topbar from './header/Topbar';



const FullLayout: FC = () => {
  return (
    <>
      <Topbar />
      <div className="flex w-full  bg-lightgray min-h-[calc(100vh_-_65px)]">
        <div className="page-wrapper flex w-full">
          {/* Header/sidebar */}
          <Sidebar />
          <div className="page-wrapper-sub flex flex-col w-full ">
            {/* Top Header  */}
            <Header />

            <div
              className={`h-100`}
            >
              {/* Body Content  */}
              <div
                className={`w-full`}
              >
                <ScrollToTop>
                  <div className="container py-30">
                    <Outlet />
                  </div>
                </ScrollToTop>
              </div>
              
            </div>
            <div className="bg-lightgray text-center mt-auto">
                <p className="text-base pb-10">
                  Design and Developed by{" "}
                  <Link
                    to="https://wrappixel.com/"
                    target="_blank"
                    className="pl-1 text-primary underline decoration-primary"
                  >
                    wrappixel.com
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullLayout;
