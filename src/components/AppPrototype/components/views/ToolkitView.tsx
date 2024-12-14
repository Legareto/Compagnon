import React from "react";

export function ToolkitView() {
  return (
    <div className="space-y-4 font-inter">
      <h2 className="text-xl font-bold text-[#128DB9]">Trousse étudiante</h2>
      <div className="bg-[#27282B]/30 p-4 rounded-lg space-y-4">
        <h3 className="text-[#000000] font-semibold">
          Bienvenue à l&apos;UQAT
        </h3>
        <p className="text-[#000000]/80 leading-relaxed">
          Voici une trousse d&apos;accueil pour bien vous accompagner en ce
          début de parcours universitaire. Elle contient une foule
          d&apos;informations utiles, prenez le temps de la consulter!
        </p>
        <p className="text-[#000000]/80 leading-relaxed">
          N&apos;oubliez pas, plusieurs services sont disponibles pour vous
          soutenir et vous accompagner dans votre cheminement, n&apos;hésitez
          pas à communiquer avec nous.
        </p>
        <p className="text-black font-medium">Bonne session!</p>
      </div>

      {/* Additional content to demonstrate scrolling */}
      <div className="space-y-4">
        <h3 className="text-[#000000] font-semibold mt-6">
          Services disponibles
        </h3>
        <div className="bg-[#27282B]/30 p-4 rounded-lg">
          <ul className="space-y-3 text-[#000000]/80">
            <li>• Service aux étudiants</li>
            <li>• Bibliothèque</li>
            <li>• Centre d&apos;aide à la réussite</li>
            <li>• Services informatiques</li>
            <li>• Services financiers</li>
          </ul>
        </div>

        <h3 className="text-[#000000] font-semibold mt-6">
          Ressources importantes
        </h3>
        <div className="bg-[#27282B]/30 p-4 rounded-lg">
          <ul className="space-y-3 text-[#000000]/80">
            <li>• Guide de l&apos;étudiant</li>
            <li>• Calendrier universitaire</li>
            <li>• Plan du campus</li>
            <li>• Règlements et politiques</li>
            <li>• Coordonnées importantes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
