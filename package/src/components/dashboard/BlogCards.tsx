
import user1 from "/src/assets/images/profile/user-1.jpg";
import user2 from "/src/assets/images/profile/user-2.jpg";
import user3 from "/src/assets/images/profile/user-6.jpg";
import img1 from "/src/assets/images/blog/blog-img1.jpg";
import img2 from "/src/assets/images/blog/blog-img2.jpg";
import img3 from "/src/assets/images/blog/blog-img3.jpg";
import { Badge } from "src/components/ui/badge";

import { Icon } from "@iconify/react";
import { Link } from "react-router";


const BlogCardsData = [
  {
    avatar: user1,
    coveravatar: img1,
    read: "2 min Read",
    title: "As yen tumbles, gadget-loving Japan goes for secondhand iPhones",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url:''
  },
  {
    avatar: user2,
    coveravatar: img2,
    read: "2 min Read",
    title:
      "Intel loses bid to revive antitrust case against patent foe Fortress",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url:''
  },
  {
    avatar: user3,
    coveravatar: img3,
    read: "2 min Read",
    title: "COVID outbreak deepens as more lockdowns loom in China",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url:''
  },
];

const BlogCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        {BlogCardsData.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <Link to={item.url} className="group">
            <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full wrap-break-word overflow-hidden">
                <div className="relative">
                  <img src={item.coveravatar} alt="materialm" className="w-full" />
                  <Badge
                    variant="secondary"
                    className="absolute bottom-5 right-5 font-semibold bg-white/80 dark:bg-dark/80 text-dark dark:text-white border-none"
                  >
                    {item.read}
                  </Badge>
                </div>

                <div className="px-6 pb-6">
                  <img
                    src={item.avatar}
                    className="h-10 w-10 rounded-full -mt-7 relative z-1"
                    alt="user"
                  />
                  <Badge variant="secondary" className="mt-6 bg-muted text-darklink dark:bg-darkmuted dark:text-white/70 border-none">
                    {item.category}
                  </Badge>
                  <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2 font-semibold">{item.title}</h5>
                  <div className="flex">
                    <div className="flex gap-2 me-6 items-center">
                    <Icon icon="solar:eye-outline" height="18" className="text-dark dark:text-white" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <Icon icon="solar:chat-line-outline" height="18" className="text-dark dark:text-white" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-1 items-center ms-auto">
                      <div className="w-1.5 h-1.5 rounded-full border border-darklink"></div>
                      <span className="text-sm text-darklink">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
