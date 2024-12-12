import React from 'react';
import { useSessions } from '../hooks/useSessions';
import { SessionSelector } from './SessionSelector';
import { CourseDisplay } from './CourseDisplay';

export function CourseSection() {
  const { 
    currentSession,
    currentCourse,
    nextSession,
    previousSession
  } = useSessions();

  return (
    <div className="space-y-2">
      <h4 className="text-primary font-medium">Mes cours</h4>
      <SessionSelector
        session={currentSession.name}
        onPrevious={previousSession}
        onNext={nextSession}
      />
      <CourseDisplay name={currentCourse.name} />
    </div>
  );
}