import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import CustomHead from '../components/CustomHead'
import Separator from '../components/ui/Separator'
import ContactForm from '../components/forms/ContactForm'
import { HeadingTwo } from '../components/ui/HeadingPreset'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'

const HomePage: NextPage = () => {
  return (
    <div className="page-content">
      <CustomHead
        title="John Lomat | WordPress & WooCommerce Expert"
        description="Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO. Proven track record with 26 websites delivered."
        keywords="WordPress CMS, WordPress website development, WooCommerce setup, Divi page builder, Elementor page builder, Responsive web design, Mobile-friendly websites, Website responsiveness, Mobile optimization, Online store setup with WooCommerce, E-commerce solutions with WooCommerce, WooCommerce store customization, Creating landing pages with Elementor, Elementor drag-and-drop builder, WordPress migration services, WordPress support and updates"
      />

      <section className="relative bg-[#969696] bg-none bg-auto bg-no-repeat pt-0 md:pt-12 xl:bg-[#D7D7D7] xl:bg-[url('/images/section-background-1.svg')] xl:bg-[center_right_-20rem] 2xl:bg-right">
        <div className="container flex flex-wrap space-y-6">
          <div className="bg-top-center absolute bottom-0 left-0 flex w-full items-center bg-[url('/images/rectangle-82.svg')] bg-cover bg-no-repeat px-4 py-[15%] md:static md:bottom-auto md:left-auto md:w-1/2 md:bg-none md:p-0">
            <div className="relative flex w-full flex-col pe-12 pt-[5.625rem] font-raleway md:w-auto md:p-0">
              <h1 className="mb-0 text-[1.25rem] font-bold text-white md:mb-4 md:text-[2.5rem] md:text-neutral-900">
                Hi, I am{' '}
                <span className="mt-0 block text-[2.1875rem] leading-none md:mt-12 md:text-[5rem]">
                  John Lomat
                </span>
              </h1>
              <h2 className="text-[0.875rem] font-bold text-white md:text-[1.5rem] xl:text-[#909090]">
                Web Developer/WordPress Developer
              </h2>
              {/* <div className="mb-24 mt-6 inline-flex max-w-[480px] flex-wrap gap-2">
                <img src="https://camo.githubusercontent.com/980ae91897b1ccaa266ac28a72a3f7603d59b905b4f2aececd7ba8e63e65f347/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352532302d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/321a66a07011dceb6427f80f279d9a13520ea7c4eec617c889ae1554ee94ba06/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4353532532302d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/c986c0a6e6ed97078b7865bb7901d18e27b579d9170a44660651932469525dae/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742532302d2532334637444631452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" />
                <img src="https://camo.githubusercontent.com/450ab63065ba34a237b3163d6004e4c46b6898438368b35960e69416ac0b2a89/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970657363726970742d3331373843363f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/fc31b91314c9ce07f3fa565d2cf74738230dcc46dfd5d8692a37e9970919b926/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5048502d3741383642383f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/b9e73ccddf4fcc4bae2727a26deb438b79f35b6412e53b4203399ddda149a415/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332412e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642" />
                <img src="https://camo.githubusercontent.com/ed6fb169153e856f6344c75cb151d36f77b7b8e8879004a439d92808f27c7e86/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742e6a732d3232323232323f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/7cd1f4879635bcac8ddf23e2e1bf3b993978f506d1973fa1d04468ea9d1fa796/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a51756572792d3037363961642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/6c62369c4e99b8a15e8bc2252842ba29e6af1a870849ba36b78e534304113437/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3338423241433f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/c402bd25609922ab7160b91524aeb125a2e664070816aeb6dd66af9c41f70087/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/f54d8700aba44fd976443452fe7cba7354ff10d7c1fa03ff7f523cb630c8dd29/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d3437413234382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4d6f6e676f4442266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/38be75272aa009a9a1af1a4091339991926d814bcf2a3e3df8a9b01969480872/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/474358d6d437960ab3ef867c4b335710e8feda8e7858343be46df8df4f7bdae0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f524553542532304150492d3030383243393f7374796c653d666f722d7468652d6261646765266c6f676f3d617069266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/14770487bfcb242b6319924b3b24dc6144f51d2c62df4d7448b9e92070a10a61/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4772617068514c2d4531303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6772617068716c266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/4f5f4fa2cb1d2585575f334c7968b127b8d3ff534e6b7e4fb51b4ddde5f8313d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47697448756225323050616765732d3232323232322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4769744875622d5061676573266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/1cc9576a938f15694733282c34345057b7c2c774fd1d99682cca421c135440ad/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56657263656c2d3232323232323f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/093e53b648bb5acb5f127bf0ce94133933993294459aec44a6a434ba37aea947/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6350616e656c2d6666366332632e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6370616e656c266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/acd48931c8ffe864259e39e613bf2a1d8b5cb48ff8908ba3d2374aab6cc3d6a8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534153532d4343363639393f7374796c653d666f722d7468652d6261646765266c6f676f3d73617373266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/3d768e26ac10ba994a60ed19acd487895cc43a9cdd43e9305c2408b93136234d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/76e77e0627d6508db8bf0a784a66a27e3a636f901c7a190f8eaa7c80ddec84a8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333232323232322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/998382ebc9a32162128b00b597ea488192df024fd015e5edec001fe29fcb93a6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030373864372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/03a1992c246dcbdbaa772714e7c4d0fa4bb3b0de8a6a157405d17f8f8bd7cdf0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/85137418823cadcadc1aad0a8637f04fc0b8829ad76c78b0a0caba19d091a05a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5765627061636b2d3844443646393f7374796c653d666f722d7468652d6261646765266c6f676f3d7765627061636b266c6f676f436f6c6f723d626c61636b" />
                <img src="https://camo.githubusercontent.com/3bee2524d21dda5a98b1a1c6685f5fed97ac3bcab4bdf70e8f2dc022168df2c0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50726574746965722d3141324333343f7374796c653d666f722d7468652d6261646765266c6f676f3d7072657474696572266c6f676f436f6c6f723d463742413345" />
                <img src="https://camo.githubusercontent.com/e9bb3c92f3308ce30d360ab193343a18a5baf066a204acc94f0334cc9213ad4e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f45534c696e742d3442333243333f7374796c653d666f722d7468652d6261646765266c6f676f3d65736c696e74266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/7a78be6671a8f55a1937bb2c1b4ffdbab5057fd953539705e530f95218d77e37/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/505112e30412c42a7b485819e63df567ef9f5e9085e14330f8d1d2e00fb4916f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726450726573732d3231373539622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d776f72647072657373266c6f676f436f6c6f723d7768697465" />
                <img src="https://camo.githubusercontent.com/eff3d765eb07aadb32c1678b7bee27a8b4f154b8f4b23b3ac7f3d4d0b349a81a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5061796c6f6164253230434d532d3232323232322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d5061796c6f61642d434d53266c6f676f436f6c6f723d7768697465" />
              </div> */}
              <div className="absolute bottom-0 right-0 mt-0 flex w-auto max-w-[10.5rem] flex-col justify-between space-y-4 md:static md:bottom-auto md:right-auto md:mt-12 md:w-full md:flex-row md:space-y-0">
                <Link
                  href="https://linkedin.com/in/john-lomat-3b0447121/"
                  target="_blank"
                  aria-label="See my working experience"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link
                  href="https://github.com/johnlomat/"
                  target="_blank"
                  aria-label="See my Github projects"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link
                  href="https://codepen.io/jedl1503"
                  target="_blank"
                  aria-label="See my Codepen projects"
                >
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
              src="/images/john-lomat-profile-picture.png"
              alt="John Lomat profile picture"
              width={515}
              height={872}
              priority={true}
            />
          </div>
        </div>
      </section>

      <div className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)]">
        <section className="relative py-24" id="about-me">
          <div className="container flex flex-wrap space-y-6">
            <div className="flex w-full flex-col items-center space-y-20">
              <HeadingTwo title="About me" />
              <div className="w-full max-w-[46.875rem] text-center font-open-sans text-[1.0625rem]">
                <p className="mb-4">
                  I&apos;m John Lomat, an expert in WordPress and WooCommerce development with over
                  5 years of experience. My skill set includes extensive proficiency with Elementor,
                  Divi, Bootstrap 5, SASS, jQuery, Tailwind CSS, Next.js, and Advanced Custom Fields
                  (ACF). I excel in transforming mock-up designs into fully functional, responsive
                  websites that provide excellent performance and user experience.
                </p>
                <p className="mb-4">
                  I have a strong understanding of HTML, CSS, JavaScript, and a basic knowledge of
                  PHP and MySQL, allowing me to integrate advanced functionalities and manage
                  diverse web development tasks. My experience extends to customizing WordPress and
                  WooCommerce sites with WordPress and WooCommerce hooks, troubleshooting WordPress
                  issues, and managing hosting via cPanel. I also specialize in creating WordPress
                  headless CMS setups using the WPGraphQL plugin and rendering the frontend with
                  Next.js.
                </p>
                <p>
                  Additionally, I focus on on-page SEO using Rank Math, implementing security with
                  the WP All-in-One Security plugin, and optimizing page performance. My services
                  also include website maintenance, such as fixing broken links, to ensure ongoing
                  site health and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <SkillsSection />
      </div>

      <ProjectsSection />

      <section
        className="relative bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24"
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
  )
}

export default HomePage
