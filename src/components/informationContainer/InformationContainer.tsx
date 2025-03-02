import React from "react";

interface InformationContainerProps {
  label: string;
  children: React.ReactNode;
}

function InformationContainer(props: InformationContainerProps) {
  return (
    <div className="flex gap-1">
      <p>{props.label}: </p>
      <p className="font-bold">{props.children}</p>
    </div>
  );
}

export default InformationContainer;
