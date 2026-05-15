
import React from "react";
import { Badge } from "src/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "src/components/ui/breadcrumb";
import { Icon } from "@iconify/react";
import CardBox from "src/components/shared/CardBox";

interface BreadCrumbType {
  subtitle?: string;
  items?: any[];
  title: string;
  children?: React.ReactNode;
}

const BreadcrumbComp = ({ items, title }: BreadCrumbType) => {
  return (
    <>
      <CardBox className={`mb-30 py-4`}>
        <div className="flex justify-between items-center">
          <h6 className="text-base font-semibold">{title}</h6>
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2">
              {items
                ? items.map((item, index) => (
                    <React.Fragment key={item.title}>
                      <BreadcrumbItem>
                        {item.to ? (
                          <BreadcrumbLink href={item.to} className="flex items-center">
                            {index === 0 ? (
                              <Icon
                                icon="solar:home-2-line-duotone"
                                height={20}
                              />
                            ) : (
                              item.title
                            )}
                          </BreadcrumbLink>
                        ) : (
                          <Badge variant="secondary" className="bg-lightprimary text-primary hover:bg-lightprimary/80 border-none">
                            {item.title}
                          </Badge>
                        )}
                      </BreadcrumbItem>
                      {index < items.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))
                : ""}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </CardBox>
    </>
  );
};

export default BreadcrumbComp;
