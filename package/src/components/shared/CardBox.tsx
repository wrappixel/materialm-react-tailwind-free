
import { Card } from "src/components/ui/card";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card p-30 shadow-md dark:shadow-none rounded-tw ${className}`}>
      {children}
    </Card>
  );

};
export default CardBox;
