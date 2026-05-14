
import { Button } from "src/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import user1 from "/src/assets/images/profile/user-1.jpg";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="relative group/menu">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={(props) => (
            <span
              {...props}
              className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary focus:outline-hidden"
            >
              <img
                src={user1}
                alt="logo"
                height="35"
                width="35"
                className="rounded-full"
              />
            </span>
          )}
        />
        <DropdownMenuContent className="rounded-sm w-44 p-1" align="end">
          <DropdownMenuItem className="p-0 focus:bg-transparent">
            <Link
              to="/ui/form"
              className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark focus:bg-lighthover focus:text-primary rounded-md"
            >
              <Icon icon="solar:user-circle-outline" height={20} />
              My Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0 focus:bg-transparent">
            <Link
              to="/ui/table"
              className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark focus:bg-lighthover focus:text-primary rounded-md"
            >
              <Icon icon="solar:letter-linear" height={20} />
              My Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0 focus:bg-transparent">
            <Link
              to="/"
              className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark focus:bg-lighthover focus:text-primary rounded-md"
            >
              <Icon icon="solar:checklist-linear" height={20} />
              My Dashboard
            </Link>
          </DropdownMenuItem>
          <div className="p-3 pt-0">
            <Link
              to="/auth/login"
              className="mt-2 w-full border border-primary text-primary bg-transparent hover:bg-lightprimary outline-hidden focus:outline-hidden inline-flex items-center justify-center rounded-lg h-7 px-2.5 text-[0.8rem] transition-all"
            >
              Logout
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
