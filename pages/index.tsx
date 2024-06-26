import type { NextPage } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import Separator from "../components/ui/Separator";
import ContactForm from "../components/forms/ContactForm";
import { HeadingTwo } from "../components/ui/HeadingPreset";
import SkillsSection from "../components/sections/SkillsSection";

const HomePage: NextPage = () => {
  return (
    <div className="page-content">
      <CustomHead
        title="John Lomat | WordPress & WooCommerce Expert"
        description="Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO optimization. Proven track record with 26 websites delivered."
        keywords="WordPress CMS, WordPress website development, WooCommerce setup, Divi page builder, Elementor page builder, Responsive web design, Mobile-friendly websites, Website responsiveness, Mobile optimization, Online store setup with WooCommerce, E-commerce solutions with WooCommerce, WooCommerce store customization, Creating landing pages with Elementor, Elementor drag-and-drop builder, WordPress migration services, WordPress support and updates"
      />

      <section className="relative bg-[#969696] bg-none bg-auto bg-no-repeat pt-0 md:pt-12 xl:bg-[#D7D7D7] xl:bg-[url('/images/section-background-1.svg')] xl:bg-[center_right_-20rem] 2xl:bg-right">
        <div className="container flex flex-wrap space-y-6">
          <div className="bg-top-center absolute bottom-0 left-0 flex w-full items-center bg-[url('/images/rectangle-82.svg')] bg-cover bg-no-repeat px-4 py-[15%] md:static md:bottom-auto md:left-auto md:w-1/2 md:bg-none md:p-0">
            <div className="relative flex w-full flex-col pe-12 pt-[5.625rem] font-raleway md:w-auto md:p-0">
              <h1 className="mb-0 text-[1.25rem] font-bold text-white md:mb-4 md:text-[2.5rem] md:text-black">
                Hi, I am{" "}
                <span className="mt-0 block text-[2.1875rem] leading-none md:mt-12 md:text-[5rem]">
                  John Lomat
                </span>
              </h1>
              <h2 className="text-[0.875rem] font-bold text-white md:text-[1.5rem] xl:text-[#909090]">
                Web Developer/WordPress Developer
              </h2>
              <div className="absolute bottom-0 right-0 mt-0 flex w-auto max-w-[10.5rem] flex-col justify-between space-y-4 md:static md:bottom-auto md:right-auto md:mt-12 md:w-full md:flex-row md:space-y-0">
                <Link
                  href="https://linkedin.com/in/john-lomat-3b0447121/"
                  target="_blank"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link href="https://github.com/johnlomat/" target="_blank">
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link href="https://codepen.io/jedl1503" target="_blank">
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faCodepen}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[0!important] flex w-full justify-center md:w-1/2">
            <Image
              src="images/john-lomat-profile-picture.png"
              alt="John Lomat profile picture"
              width={515}
              height={872}
            />
          </div>
        </div>
      </section>

      <div className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)]">
        <section className="py-24" id="about-me">
          <div className="container flex flex-wrap space-y-6">
            <div className="flex w-full flex-col items-center space-y-20">
              <HeadingTwo title="About me" />
              <div className="w-full max-w-[46.875rem] text-center font-open-sans text-[1.0625rem]">
                <p className="mb-4">
                  I&apos;m John Lomat, an expert in WordPress and WooCommerce
                  development with over 5 years of experience. My skill set
                  includes extensive proficiency with Elementor, Divi, Bootstrap
                  5, SASS, jQuery, Tailwind CSS, Next.js, and Advanced Custom
                  Fields (ACF). I excel in transforming mock-up designs into
                  fully functional, responsive websites that provide excellent
                  performance and user experience.
                </p>
                <p className="mb-4">
                  I have a strong understanding of HTML, CSS, JavaScript, and a
                  basic knowledge of PHP and MySQL, allowing me to integrate
                  advanced functionalities and manage diverse web development
                  tasks. My experience extends to handling WordPress and
                  WooCommerce hooks, troubleshooting WordPress issues, and
                  managing hosting via cPanel.
                </p>
                <p>
                  Additionally, I focus on on-page SEO using Rank Math,
                  implementing security with the WP All-in-One Security plugin,
                  and optimizing page performance. My services also include
                  website maintenance, such as fixing broken links, to ensure
                  ongoing site health and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <SkillsSection />
      </div>

      <section
        className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24"
        id="contact-me"
      >
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <HeadingTwo title="Contact" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
