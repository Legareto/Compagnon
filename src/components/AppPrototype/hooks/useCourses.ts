import { useState } from 'react';
import { Course } from '../types';

const courses: Course[] = [
  { id: '1', name: 'Mathématiques avancées', session: 'Session automne 2024' },
  { id: '2', name: 'Physique quantique', session: 'Session automne 2024' },
  { id: '3', name: 'Chimie organique', session: 'Session automne 2024' }
];

export function useCourses() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const nextCourse = () => {
    setCurrentCourseIndex((prev) => 
      prev === courses.length - 1 ? 0 : prev + 1
    );
  };

  const previousCourse = () => {
    setCurrentCourseIndex((prev) => 
      prev === 0 ? courses.length - 1 : prev - 1
    );
  };

  return {
    currentCourse: courses[currentCourseIndex],
    nextCourse,
    previousCourse
  };
}