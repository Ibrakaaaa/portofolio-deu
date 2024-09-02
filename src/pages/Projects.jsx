import React from 'react';
import { FaCode } from 'react-icons/fa';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="body-font text-gray-400">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="mb-20 flex w-full flex-col">
          <FaCode className="mx-auto mb-0 inline-block w-10 text-9xl" />
          <h1 className="text-3xl font-bold text-white">Erstellte Apps</h1>
          <p className="mx-auto py-5 text-base leading-relaxed lg:w-2/3">
          "Im Folgenden sind einige der Apps aufgeführt, die ich entwickelt habe. Jede von ihnen zeigt meine Fähigkeiten in React, Problemlösung und nutzerzentriertem Design. Diese Projekte verdeutlichen meine Fähigkeit, Ideen in funktionale, intuitive und wirkungsvolle digitale Lösungen umzusetzen."
          </p>
        </div>

        <div className="-m-4 flex flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="blank"
              className="w-100 h-[20rem] overflow-hidden p-4 sm:w-1/2"
            >
              <div className="relative flex">
                <img
                  alt="galery"
                  src={project.image}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="relative z-10 w-full border-4 border-gray-800 bg-gray-900 px-8 py-10 opacity-0 hover:opacity-100">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-green-400">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-white">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
