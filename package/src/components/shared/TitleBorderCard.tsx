
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import React from "react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
}) => {


  return (
    <Card
      className={`card dark:shadow-dark-md shadow-md p-0 overflow-hidden rounded-tw ${className} `}
    >
      <CardHeader className="flex justify-between items-center border-b border-ld px-6 py-4">
        <h5 className="text-xl font-semibold">{title}</h5>
      </CardHeader>
      <CardContent className="pt-4 p-6">{children}</CardContent>
    </Card>
  );
};

export default TitleCard;
