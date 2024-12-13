import React from "react";
import { MessageList } from "../MessageList";
import { CourseSection } from "../CourseSection";

export function DashboardView() {
  return (
    <div className="space-y-6 font-inter">
      <MessageList />
      <CourseSection />
    </div>
  );
}
