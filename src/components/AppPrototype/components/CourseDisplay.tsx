import React from "react";

interface CourseDisplayProps {
  name: string;
}

export function CourseDisplay({ name }: CourseDisplayProps) {
  return (
    <div className="bg-[#27282B]/20 p-3 rounded-lg">
      <div className="text-[#4B4D53] font-medium text-center">{name}</div>
    </div>
  );
}
