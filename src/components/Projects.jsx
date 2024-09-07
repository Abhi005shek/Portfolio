import React from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "../assets/images/pimages.js";

function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-12 min-h-[100vh] mt-20">
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        Projects
      </h1>
      <div className="mt-16 mx-2 md:mx-16 grid gap-8 grid-cols-1 sm:grid-cols-3 ">
        <ProjectCard title="Google Keep Clone" {...projectDetails.keeper}>
          A Google Keep website clone featuring some of the functionalities of
          Google Keep. You can create notes, make doodles and much more. Check
          it by yourself.
        </ProjectCard>

        <ProjectCard
          title="Movies Recommendation site"
          {...projectDetails.gmovies}
        >
          A Movie Recommendation Website that shows upcoming, high rated and
          popular movies.
        </ProjectCard>

        <ProjectCard title="FastPizza" {...projectDetails.fastpizza}>
          A pizza ordering website named "FastPizza" offering same features as
          we see on food delivery apps. Includes routing, global state
          management.
        </ProjectCard>

        <ProjectCard title="Music Player" {...projectDetails.mplayer}>
          A Music Player made with react native, react native track player, and
          other libraries that fetches songs from the local device and let you
          play songs
        </ProjectCard>

        <ProjectCard title="Far Away App" {...projectDetails.faraway}>
          A todo app for trip where you can add items in your list for your next
          trip, check items that you've already packed, and much more.
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
