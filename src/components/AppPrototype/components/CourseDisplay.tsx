import React from 'react';

interface CourseDisplayProps {
  name: string;
}

export function CourseDisplay({ name }: CourseDisplayProps) {
  return (
    <div className="bg-[#27282B]/30 p-3 rounded-lg">
      <div className="text-[#EDEFEF] font-medium text-center">{name}</div>
    </div>
  );
}