
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Icon } from "@iconify/react";
import React from "react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleIconCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
  onDownload,
}) => {


  return (
    <Card
      className={`card dark:shadow-dark-md shadow-md p-0 overflow-hidden rounded-tw ${className}`}
    >
      <CardHeader className="flex flex-row justify-between items-center border-b border-ld px-6 py-4 space-y-0">
        <h5 className="text-xl font-semibold">{title}</h5>

        <Button
          className="flex items-center bg-primary text-white hover:bg-primary/90"
          size="sm"
          onClick={onDownload}
        >
          <Icon
            icon="solar:download-minimalistic-bold-duotone"
            width={20}
            height={20}
          />
        </Button>
      </CardHeader>
      <CardContent className="pt-4 p-6">{children}</CardContent>
    </Card>
  );
};

export default TitleIconCard;
