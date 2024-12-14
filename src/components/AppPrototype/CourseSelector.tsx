import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Course } from "./types/index";

interface CourseSelectorProps {
  currentCourse: Course;
  onPrevious: () => void;
  onNext: () => void;
}

export function CourseSelector({
  currentCourse,
  onPrevious,
  onNext,
}: CourseSelectorProps) {
  return (
    <div className="flex items-center justify-between bg-background/50 p-2 rounded-lg mb-4">
      <button
        onClick={onPrevious}
        className="p-1 hover:bg-primary/10 rounded-full transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-light" />
      </button>
      <div className="text-center">
        <div className="text-sm text-light/70">{currentCourse.session}</div>
        <div className="text-light font-medium">{currentCourse.name}</div>
      </div>
      <button
        onClick={onNext}
        className="p-1 hover:bg-primary/10 rounded-full transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-light" />
      </button>
    </div>
  );
}
