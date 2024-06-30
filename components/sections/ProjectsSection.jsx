"use client";

import { Button, Modal, Tooltip } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans, Montserrat } from "next/font/google";
import { HeadingTwo } from "../ui/HeadingPreset";
import { projects } from "../../data/projects";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }) => (
    <div className="group relative flex w-full md:w-1/2 lg:w-1/3">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black/20 transition-all ease-in-out group-hover:bg-white/10"></div>
      <Button
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-neutral-950 bg-cyan-700 font-montserrat font-bold uppercase text-white opacity-0 transition ease-in-out hover:bg-cyan-900 hover:text-white group-hover:opacity-100"
        onClick={() => handleOpenModal(project)}
      >
        Details
      </Button>
      <Image
        src={project.image.full}
        width={840}
        height={495}
        alt={project.image.alt_text}
        className="grayscale group-hover:grayscale-0"
      />
    </div>
  );

  const TechStack = ({ logo, title }) => (
    <div className="relative flex items-center justify-center">
      <Tooltip content={title}>
        <Image src={logo} alt={title} width={50} height={50} />
      </Tooltip>
    </div>
  );

  const ProjectModal = ({
    title,
    description,
    scope_list_html,
    demo_link,
    screenshot_link,
    type,
    tech_stack,
  }) => (
    <Modal show={!!selectedProject} onClose={handleCloseModal}>
      <Modal.Header className={open_sans.className}>{title}</Modal.Header>
      <Modal.Body className={open_sans.className}>
        <div className="space-y-6">
          <div className="w-full">
            <div className={`${montserrat.className} uppercase text-cyan-700`}>
              Project Overview
            </div>
            <div>{description}</div>
          </div>
          <div className="w-full">
            <div className={`${montserrat.className} uppercase text-cyan-700`}>
              Type
            </div>
            <div>{type}</div>
          </div>
          <div className="w-full">
            <div className={`${montserrat.className} uppercase text-cyan-700`}>
              Key Features
            </div>
            <ul
              dangerouslySetInnerHTML={{ __html: scope_list_html }}
              className="list-disc space-y-1 ps-[1.25rem]"
            />
          </div>
          <div className="w-full">
            <div
              className={`${montserrat.className} mb-1 uppercase text-cyan-700`}
            >
              Tech Stack
            </div>
            <div className="grid grid-cols-4 flex-wrap gap-6 md:grid-cols-8">
              {tech_stack.map((techStack, index) => (
                <TechStack key={index} {...techStack} />
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        {demo_link && (
          <Button
            as={Link}
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900`}
          >
            Demo
          </Button>
        )}
        <Button
          as={Link}
          href={screenshot_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${montserrat.className} ${demo_link ? "border border-gray-200 bg-white uppercase text-gray-900 hover:border-gray-300 hover:bg-gray-200" : "border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900"}`}
        >
          Screenshot
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <section
        className="relative space-y-20 bg-neutral-900 pt-24"
        id="projects"
      >
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <HeadingTwo
              className="border-gray-200 text-gray-200"
              title="Projects"
            />
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap md:flex-row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          scope_list_html={selectedProject.scope_list_html}
          demo_link={selectedProject.demo_link}
          screenshot_link={selectedProject.screenshot_link}
          type={selectedProject.type}
          tech_stack={selectedProject.tech_stack}
        />
      )}
    </>
  );
};

export default ProjectsSection;
