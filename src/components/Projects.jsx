import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "../assets/images/pimages.js";
import { motion, useInView } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="projects"
      className="px-6 sm:px-12 min-h-[100vh] mt-20"
    >
      <h1 className="text-center font-bangers text-4xl sm:text-6xl text-primary">
        Projects
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 mx-2 md:mx-16 grid gap-8 grid-cols-1 sm:grid-cols-3"
      >
        <ProjectCard
        variants={childVariants}
        title="Slack Clone" {...projectDetails.slackclone}>
          A real-time messaging app built with Next.js and Convex, featuring
          secure auth (credentials & OAuth), multi-workspace support,
          channel-based chats, and personal messaging. Designed for seamless
          collaboration with dynamic backend integration.
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="Google Keep Clone"
          {...projectDetails.keeper}
        >
          A Google Keep website clone featuring some of the functionalities of
          Google Keep. You can create notes, make doodles and much more. Check
          it by yourself.
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="Movies Recommendation site"
          {...projectDetails.gmovies}
        >
          A Movie Recommendation Website that shows upcoming, high rated and
          popular movies.
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="FastPizza"
          {...projectDetails.fastpizza}
        >
          A pizza ordering website named "FastPizza" offering same features as
          we see on food delivery apps. Includes routing, global state
          management.
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="Music Player"
          {...projectDetails.mplayer}
        >
          A Music Player made with react native, react native track player, and
          other libraries that fetches songs from the local device and let you
          play songs
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="Far Away App"
          {...projectDetails.faraway}
        >
          A todo app for trip where you can add items in your list for your next
          trip, check items that you've already packed, and much more.
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title={"Vaartalaap"}
          {...projectDetails.vaartalap}
        >
          Made a responsive real-time chatting app known as "Vaartalaap" using
          Reactjs, Material Ui and Socket.io
        </ProjectCard>

        <ProjectCard
          variants={childVariants}
          title="PokeBall App"
          {...projectDetails.pokeball}
        >
          "PokémonBall is a mobile app built with React Native and Expo,
          offering a simple and seamless way to explore detailed information
          about Pokémon. With an intuitive interface and smooth navigation,
          users can easily access key details like stats, abilities, and
          evolutions, making it a go-to tool for Pokémon enthusiasts."
        </ProjectCard>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
