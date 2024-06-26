// components/SkillsSection.js
import Image from "next/image";
import { usingNow, learning, otherSkills } from "../../data/skills";
import { HeadingTwo } from "../../components/ui/HeadingPreset";

const SkillItem = ({ src, alt, width, height, name }) => (
  <div className="flex w-1/2 flex-col items-center p-[0.9375rem] sm:p-0 md:w-1/3 lg:w-1/4">
    <div className="mb-4 flex h-[6.25rem] w-[6.25rem] items-center justify-center">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
    <span className="text-center uppercase text-[#212121]">{name}</span>
  </div>
);

const SkillsSection = () => (
  <section className="py-24 font-montserrat" id="skills">
    <div className="container flex flex-wrap space-y-6">
      <div className="flex w-full flex-col items-center space-y-20">
        <HeadingTwo title="Skills" />

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] lg:text-left">
            <h3>Using now:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {usingNow.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] lg:text-left">
            <h3>Learning:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {learning.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[52.75rem] text-left">
          <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] lg:text-left">
            <h3>Other skills:</h3>
          </div>
          <div className="flex flex-wrap gap-y-12">
            {otherSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
