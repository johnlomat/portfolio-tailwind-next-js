"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
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
  const [openModal, setOpenModal] = useState(true);

  const ProjectCard = ({ image: { alt_text }, image: { full } }) => (
    <div className="group relative flex w-full md:w-1/2 lg:w-1/3">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black/20 transition-all ease-in-out group-hover:bg-white/15"></div>
      <Button
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-montserrat uppercase opacity-0 transition-opacity ease-in-out hover:text-white group-hover:opacity-100"
        onClick={() => setOpenModal(true)}
      >
        Details
      </Button>
      <Image src={full} width={840} height={495} alt={alt_text} />
    </div>
  );

  return (
    <>
      <section className="relative space-y-20 bg-[#1A1A1A] pt-24">
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <HeadingTwo className="border-white text-white" title="Projects" />
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap md:flex-row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className={open_sans.className}>
          Terms of Service
        </Modal.Header>
        <Modal.Body className={open_sans.className}>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-end">
          <Button
            onClick={() => setOpenModal(false)}
            className={`${montserrat.className} uppercase`}
          >
            Demo
          </Button>
          <Button
            color="gray"
            onClick={() => setOpenModal(false)}
            className={`${montserrat.className} uppercase`}
          >
            Screenshot
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectsSection;
