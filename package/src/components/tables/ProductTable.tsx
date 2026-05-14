
import { Badge } from "src/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu";
import { Progress } from "src/components/ui/progress";
import { Icon } from "@iconify/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "src/components/ui/table";

import product1 from "/src/assets/images/products/s1.jpg";
import product2 from "/src/assets/images/products/s2.jpg";
import product3 from "/src/assets/images/products/s3.jpg";
import product4 from "/src/assets/images/products/s4.jpg";




const ProductTable = () => {
  const ProductTableData = [
    {
      img: product1,
      name: "iPhone 13 pro max-Pacific Blue-128GB storage",
      payment: "$180",
      paymentstatus: "Partially paid",
      process: 45,
      indicatorClass: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
    },
    {
      img: product2,
      name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
      payment: "$120",
      paymentstatus: "Full paid",
      process: 100,
      indicatorClass: "bg-success",
      statuscolor: "success",
      statustext: "Confirmed",
    },
    {
      img: product3,
      name: "PlayStation 5 DualSense Wireless Controller",
      payment: "$120",
      paymentstatus: "Cancelled",
      process: 100,
      indicatorClass: "bg-error",
      statuscolor: "error",
      statustext: "Cancelled",
    },
    {
      img: product4,
      name: "Amazon Basics Mesh, Mid-Back, Swivel Office",
      payment: "$120",
      paymentstatus: "Partially paid",
      process: 45,
      indicatorClass: "bg-warning",
      statuscolor: "secondary",
      statustext: "Confirmed",
    },
  ];

  /*Table Action*/
  const tableActionData = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];

  return (
    <>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6  relative w-full wrap-break-word">
        <h5 className="card-title">Table</h5>
        <div className="mt-3">
         
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-ld">
                    <TableHead className="p-6 text-dark dark:text-white font-semibold">Products</TableHead>
                    <TableHead className="text-dark dark:text-white font-semibold">Payment</TableHead>
                    <TableHead className="text-dark dark:text-white font-semibold">Status</TableHead>
                    <TableHead className="text-dark dark:text-white font-semibold"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border dark:divide-darkborder ">
                  {ProductTableData.map((item, index) => (
                    <TableRow key={index} className="border-b border-ld last:border-0">
                      <TableCell className="whitespace-nowrap ps-6">
                        <div className="flex gap-3 items-center">
                          <img
                            src={item.img}
                            alt="icon"
                            className="h-[60px] w-[60px] rounded-md"
                          />
                          <div className="truncat line-clamp-2 sm:text-wrap max-w-56">
                            <h6 className="text-sm font-semibold">{item.name}</h6>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <h5 className="text-base text-wrap font-semibold">
                          {item.payment}
                          <span className="text-dark opacity-70">
                            <span className="mx-1">/</span>499
                          </span>
                        </h5>
                        <div className="text-sm font-medium text-dark opacity-70 mb-2 text-wrap">
                          {item.paymentstatus}
                        </div>
                        <div className="me-5">
                          <Progress
                            value={item.process}
                            className={`[&_[data-slot=progress-indicator]]:${item.indicatorClass}`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`bg-light${item.statuscolor} text-${item.statuscolor} border-none`}
                        >
                          {item.statustext}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={(props) => (
                              <span
                                {...props}
                                className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer focus:outline-hidden"
                              >
                                <Icon icon="pepicons-pop:dots-y" height={22} />
                              </span>
                            )}
                          />
                          <DropdownMenuContent align="end" className="w-32">
                            {tableActionData.map((items, index) => (
                              <DropdownMenuItem key={index} className="flex gap-3 focus:bg-lightprimary focus:text-primary">
                                {" "}
                                <Icon icon={`${items.icon}`} height={18} />
                                <span>{items.listtitle}</span>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
         
        </div>
      </div>
    </>
  );
};

export  {ProductTable};
