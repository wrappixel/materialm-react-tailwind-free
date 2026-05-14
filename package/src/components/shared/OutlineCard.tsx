
import { Card } from "src/components/ui/card";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const OutlineCard: React.FC<MyAppProps> = ({ children, className }) => {


  return (
    <Card className={`card ${className} border border-ld p-30`}>{children}</Card>
  );

};

export default OutlineCard;
