import React, { useEffect, useState } from "react";
// import project from "../studio/schemas/project.js";
import sanityClient from "../client.js";

export default function Project() {
  // query for data
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {/* map over all project tiles */}
          {projectData && projectData.map((project, index) => (
            <article className="relative rounded-lg shadow-xl bg-white p-16">
              <h3 className="text-gray-800 text-3xl font-bold bm-2 hover:text-red-700">
                <a
                  href={project.link} // this is in sanity studio
                  alt={project.title}
                  target="_blank" //opens a different page
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs space-x-4">
                {/* <span>
                  <strong className="font-bold">Finished on</strong>: {" "}
                  {new Date(project.date).toLocaleDateString()}
                </span> */}
                {/* <span>
                  <strong className="font-bold">Type</strong>:{" "}
                  {project.projectType}
                </span> */}
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                {/* clickable link to project: */}
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank" // will open a new window
                  className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                >
                  View the project{" "}
                  {/* <span role="img" aria-label="right pointer">➡️</span> */}
                  {/* opens an emoji: aria-label finds the emoji, like an alt tag  */}
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
