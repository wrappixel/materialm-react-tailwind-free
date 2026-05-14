
import { useState, useEffect } from "react";
import { Button } from "src/components/ui/button";
import { Icon } from "@iconify/react";
import Profile from "./Profile";
import Notification from "./notification";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import MobileSidebar from "../sidebar/MobileSidebar";
import { Link } from "react-router";


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // mobile-sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <header
        className={`sticky top-0 z-5 transition-all ${isSticky
          ? "bg-background fixed w-full shadow-md"
          : "bg-background"
          }`}
      >
        <nav
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-30 px-4 flex items-center justify-between w-full`}
        >
          {/* Mobile Toggle Icon */}

          <div className="flex gap-3 items-center justify-between w-full ">
            <div className="flex gap-2 items-center">
              <span
                onClick={() => setIsOpen(true)}
                className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
              >
                <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
              </span>
              <Notification />
            </div>

            <div className="flex gap-4 items-center">
              <Link
                to="https://wrappixel.com/templates/category/react-templates/?ref=376#demos"
                target="_blank"
                className="inline-flex shrink-0 items-center justify-center rounded-full py-2.5 font-medium bg-primary text-white hover:bg-primary/80 transition-all outline-none select-none text-sm px-6"
              >
                Check Pro Template
              </Link>
              <Profile />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 w-[270px] border-none">
          <MobileSidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
