import React from 'react';
import { BiChip, BiCheckCircle } from 'react-icons/bi';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="text-center">
          <BiChip className="mx-auto mb-0 inline-block w-10 text-9xl" />
          <h1 className="text-3xl font-bold text-white">
            Fähigkeiten & Technologien
          </h1>
          <p className="mx-auto py-5 text-base leading-relaxed lg:w-2/3">
          Dies sind die Technologien, die ich für die Entwicklung aller unten aufgeführten Projekte genutzt habe. Ich habe diese Technologien innerhalb von 18 Monaten online gelernt, über Plattformen wie Udemy, FreeCodeCamp, Stack Overflow und MDN.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="relative flex h-full cursor-pointer items-center rounded bg-gray-800 p-2 text-left hover:bg-gray-700">
                <BiCheckCircle className="mx-3 text-3xl font-black text-green-400" />
                <span className="text-2l w-full p-4 font-medium text-white hover:text-green-500">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
