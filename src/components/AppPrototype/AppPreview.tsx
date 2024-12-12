import React, { useState } from 'react';
import { User } from 'lucide-react';
import { NavigationBar } from './NavigationBar';
import { MessageItem } from './MessageItem';
import { CourseSelector } from './CourseSelector';
import { useMessages } from './hooks/useMessages';
import { useCourses } from './hooks/useCourses';

export function AppPreview() {
  const { messages, toggleMessage } = useMessages();
  const { currentCourse, nextCourse, previousCourse } = useCourses();
  const [activeTab, setActiveTab] = useState('tableau');

  return (
    <div className="max-w-sm mx-auto relative">
      {/* Effet de brillance */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3.5rem] blur-xl opacity-50" />
      
      <div className="bg-background rounded-[3rem] overflow-hidden border-8 border-background shadow-xl relative">
        {/* Barre de statut */}
        <div className="bg-background h-6 relative">
          <div className="absolute left-1/2 top-0 w-1/3 h-6 bg-background rounded-b-3xl -translate-x-1/2" />
        </div>

        {/* En-tête */}
        <div className="p-4 bg-background">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-accent font-bold text-lg">Compagnon d'études</h3>
            <User className="w-6 h-6 text-light" />
          </div>
          <p className="text-light text-lg mb-4">Bonjour Tommy!</p>
        </div>

        {/* Contenu principal */}
        <div className="bg-light/5 p-4 min-h-[400px]">
          <div className="mb-6">
            <h4 className="text-primary font-medium mb-2">Messages importants</h4>
            {messages.map(message => (
              <MessageItem 
                key={message.id}
                message={message}
                onToggle={toggleMessage}
              />
            ))}
          </div>

          <div>
            <h4 className="text-primary font-medium mb-2">Mes cours</h4>
            <CourseSelector
              currentCourse={currentCourse}
              onPrevious={previousCourse}
              onNext={nextCourse}
            />
          </div>
        </div>

        {/* Barre de navigation */}
        <NavigationBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}