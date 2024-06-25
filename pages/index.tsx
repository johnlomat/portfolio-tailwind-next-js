import type { NextPage } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import Separator from "../components/ui/Separator";
import ContactForm from "../components/forms/ContactForm";
import { HeadingTwo } from "../components/ui/HeadingPreset";

const HomePage: NextPage = () => {
  return (
    <div className="page-content">
      <CustomHead
        title="John Lomat | WordPress & WooCommerce Expert"
        description="Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO optimization. Proven track record with 26 websites delivered."
        keywords="WordPress CMS, WordPress website development, WooCommerce setup, Divi page builder, Elementor page builder, Responsive web design, Mobile-friendly websites, Website responsiveness, Mobile optimization, Online store setup with WooCommerce, E-commerce solutions with WooCommerce, WooCommerce store customization, Creating landing pages with Elementor, Elementor drag-and-drop builder, WordPress migration services, WordPress support and updates"
      />

      <section className="pt-0 md:pt-12 bg-[#969696] xl:bg-[#D7D7D7] bg-none xl:bg-[url('/images/section-background-1.svg')] bg-auto bg-no-repeat 2xl:bg-right xl:bg-[center_right_-20rem] relative">
        <div className="container flex flex-wrap space-y-6">
          <div className="w-full md:w-1/2 flex items-center absolute py-[15%] px-4 md:p-0 md:static left-0 bottom-0 md:left-auto md:bottom-auto bg-[url('/images/rectangle-82.svg')] bg-cover bg-no-repeat bg-top-center md:bg-none">
            <div className="flex flex-col font-raleway relative w-full md:w-auto pt-[5.625rem] pe-12 md:p-0">
              <h1 className="text-[1.25rem] md:text-[2.5rem] font-bold mb-0 md:mb-4 text-white md:text-black">
                Hi, I am <span className="block text-[2.1875rem] md:text-[5rem] leading-none mt-0 md:mt-12">John Lomat</span>
              </h1>
              <h2 className="text-[0.875rem] md:text-[1.5rem] text-white xl:text-[#909090] font-bold">Web Developer/WordPress Developer</h2>
              <div className="w-auto space-y-4 md:space-y-0 md:w-full absolute md:static right-0 md:right-auto bottom-0 md:bottom-auto mt-0 max-w-[10.5rem] flex flex-col md:flex-row justify-between md:mt-12">
                <Link href="https://linkedin.com/in/john-lomat-3b0447121/" target="_blank">
                  <div className="bg-white md:bg-[#C4C4C4] hover:bg-black group w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faLinkedin} className="text-black group-hover:text-white text-[2rem]" />
                  </div>
                </Link>
                <Link href="https://github.com/johnlomat/" target="_blank">
                  <div className="bg-white md:bg-[#C4C4C4] hover:bg-black group w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faGithub} className="text-black group-hover:text-white text-[2rem]" />
                  </div>
                </Link>
                <Link href="https://codepen.io/jedl1503" target="_blank">
                  <div className="bg-white md:bg-[#C4C4C4] hover:bg-black group w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faCodepen} className="text-black group-hover:text-white text-[2rem]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-[0!important]">
            <Image src="images/john-lomat-profile-picture.png" alt="John Lomat profile picture" width={515} height={872} />
          </div>
        </div>
      </section>

      <div className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)]">
        <section className="py-24" id="about-me">
          <div className="container flex flex-wrap space-y-6">
            <div className="w-full flex flex-col items-center">
              <HeadingTwo title="About me" />
              <div className="w-full max-w-[46.875rem] font-open-sans text-center text-[1.0625rem]">
                <p className="mb-4">
                  I&apos;m John Lomat, an expert in WordPress and WooCommerce development with over 5 years of experience. My skill set includes extensive proficiency with Elementor, Divi, Bootstrap 5, SASS, jQuery, Tailwind CSS, Next.js, and
                  Advanced Custom Fields (ACF). I excel in transforming mock-up designs into fully functional, responsive websites that provide excellent performance and user experience.
                </p>
                <p className="mb-4">
                  I have a strong understanding of HTML, CSS, JavaScript, and a basic knowledge of PHP and MySQL, allowing me to integrate advanced functionalities and manage diverse web development tasks. My experience extends to handling WordPress
                  and WooCommerce hooks, troubleshooting WordPress issues, and managing hosting via cPanel.
                </p>
                <p>
                  Additionally, I focus on on-page SEO using Rank Math, implementing security with the WP All-in-One Security plugin, and optimizing page performance. My services also include website maintenance, such as fixing broken links, to
                  ensure ongoing site health and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="py-24 font-montserrat" id="skills">
          <div className="container flex flex-wrap space-y-6">
            <div className="w-full flex flex-col items-center">
              <HeadingTwo title="Skills" />
              <div className="w-full max-w-[52.75rem] text-left mb-20">
                <div className="text-[1.875rem] tracking-[0.5rem] uppercase font-bold mb-10 text-center lg:text-left">
                  <h3>Using now:</h3>
                </div>
                <div className="flex flex-wrap gap-y-12">
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/html5-logo.svg" alt="HTML5" width={84} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">HTML5</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/css3-logo.svg" alt="CSS3" width={84} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">CSS3</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/javascript-logo.svg" alt="JavaScript" width={96} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">JavaScript</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/php-logo.svg" alt="PHP" width={187} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">PHP</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/mysql-logo.svg" alt="MySQL" width={102} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">MySQL</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/wordpress-logo.svg" alt="WordPress" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">WordPress</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/woocommerce-logo.svg" alt="WooCommerce" width={167} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">WooCommerce</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/divi-logo.svg" alt="Divi" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Divi</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/elementor-logo.svg" alt="Elementor" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Elementor</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/bootstrap-logo.svg" alt="Bootstrap" width={96} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Bootstrap</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/tailwindcss-logo.svg" alt="tailwindcss" width={167} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">tailwindcss</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/sass-logo.svg" alt="SASS" width={127} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">SASS</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/jquery-logo.svg" alt="jQuery" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">jQuery</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/nextjs-logo.svg" alt="Next JS" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Next JS</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/vscode-logo.svg" alt="Visual Studio Code" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Visual Studio Code</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/git-logo.svg" alt="GIT" width={104} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">GIT</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/npm-logo.svg" alt="NPM" width={120} height={47} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">NPM</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/cpanel-logo.svg" alt="cPanel" width={149} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">cPanel</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/figma-logo.svg" alt="Figma" width={69} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Figma</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/adobe-photoshop-logo.svg" alt="Photoshop" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Photoshop</span>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[52.75rem] text-left mb-20">
                <div className="text-[1.875rem] tracking-[0.5rem] uppercase font-bold mb-10 text-center lg:text-left">
                  <h3>Learning:</h3>
                </div>
                <div className="flex flex-wrap gap-y-12">
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/reactjs-logo.svg" alt="React" width={106} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">React</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/laravel-logo.svg" alt="Laravel" width={167} height={173} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Laravel</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/zapier-logo.svg" alt="Zapier" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Zapier</span>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[52.75rem] text-left">
                <div className="text-[1.875rem] tracking-[0.5rem] uppercase font-bold mb-10 text-center lg:text-left">
                  <h3>Other skills:</h3>
                </div>
                <div className="flex flex-wrap gap-y-12">
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/visual-composer-logo.svg" alt="Visual Composer" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Visual Composer</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/google-analytics-logo.svg" alt="Google Analytics" width={125} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Google Analytics</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/microsoft-excel-logo.svg" alt="Microsoft Excel" width={108} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Microsoft Excel</span>
                  </div>
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-[0.9375rem] sm:p-0 flex flex-col items-center">
                    <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center mb-4">
                      <Image src="images/adobe-xd-logo.svg" alt="Adobe Xd" width={100} height={100} />
                    </div>
                    <span className="text-[#212121] uppercase text-center">Adobe Xd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-24 bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)]" id="contact-me">
        <div className="container flex flex-wrap space-y-6">
          <div className="w-full flex flex-col items-center">
            <HeadingTwo title="Contact" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
