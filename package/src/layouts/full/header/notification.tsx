import { Badge } from "src/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import { Link } from "react-router";


const NotificationsData = [
    {
        id:1,
        title:"Item1",
    },
    {
        id:2,
        title:"Item2",
    },
]

const Notification = () => {
    return (
        <div className="relative group/menu">
            <DropdownMenu>
                <DropdownMenuTrigger
                    render={(props) => (
                        <span
                            {...props}
                            className="h-10 w-10 hover:text-primary group-hover/menu:bg-lightprimary group-hover/menu:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer relative focus:outline-hidden"
                            aria-label="Notifications"
                        >
                            <Icon icon="solar:bell-linear" height={20} />
                            <span className="h-2 w-2 rounded-full absolute right-2 top-2 bg-primary" />
                        </span>
                    )}
                />
                <DropdownMenuContent className="rounded-sm w-[150px] p-1" align="start">
                    {
                        NotificationsData.map((item) => (
                            <DropdownMenuItem key={item?.id} className="p-0 focus:bg-transparent">
                                <Link to="#" className="px-3 py-2 flex items-center bg-hover group/link w-full gap-3 text-dark focus:bg-lighthover focus:text-primary rounded-md">
                                    {item?.title}
                                </Link>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Notification;
