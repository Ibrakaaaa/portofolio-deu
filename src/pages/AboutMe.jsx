import React from 'react';
import resumeDeutsch from '../assets/CV-Deutsch.pdf';
import portofolioJpg from '../../images/ICH.jpeg';
export default function AboutMe() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-center px-10 py-20 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font pb-3 text-3xl font-bold text-white sm:text-6xl">
          Hallo, ich bin Ibrahim
<br className="hidden lg:inline-block"></br>
          </h1>
          <h6 className="py-6 text-xl">Frontend-Entwickler</h6>
          <p className="mb-8 leading-relaxed">
            Ich entwickle Webseiten und React-Anwendungen und vertiefe mich
            gerne in technische Dokumentationen, um komplexe JavaScript-Probleme
            zu lösen. Mein Selbststudium hat mich zu einem proaktiven
            Problemlöser gemacht
          </p>

          <div>
            <button className="rounded border-0 bg-green-500 my-4 px-8 py-3 text-base capitalize text-white hover:bg-green-600 focus:outline-none">
              <a href="/#contact">Mit mir arbeiten</a>
            </button>
            <button className="ml-4 inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-lg capitalize text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
              <a href={resumeDeutsch} download="resume">
              Lebenslauf herunterladen
              </a>
            </button>
          </div>
        </div>

        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="h-96 w-96 rounded-full object-cover object-center"
            src={portofolioJpg}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
