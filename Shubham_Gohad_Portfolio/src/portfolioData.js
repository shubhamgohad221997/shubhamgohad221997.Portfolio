/* this file contains all the objects ,
 one object or an array for each container (section) */

const colorContainerData = {
  fontIcon: "fas fa-cog",
  paragraphOne: `Choose your favorite color`,
  paragraphTwo: `default color`,
};

const defaultColor = {
  defaultColor: "#2ecc71",
};

const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#0779e4" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" },
];

const navbarLinks = [
  { id: 1, navigateTo: "#about", label__span__title: "About" },
  { id: 2, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 3, navigateTo: "#projects", label__span__title: "Projects" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" },
  { id: 5, navigateTo: "#contact", label__span__title: "Contact" },
];

const logoData = [
  {
    id: 1,
    name__ariaLabel: "Shubham Gohad",
    first__word: "Shubham",
    inspan: "Gohad",
  },
];

const headerInfo = {
  imgURL:require("./images/Shubham1.png"),
  name: "I'm Shubham",
  job: "Full Stack Web Developer ",
  resumeLink: require("./download/Shubham_Gohad.pdf"),
  fontIcon: "fas fa-download",
  AnchorText: "download resume",
};
const headerImage = {
  headerImage_src: require("./images/header_image-Recovered-Recovered.png"),
  // ./images/header_image-Recovered-Recovered.png
};
const projectsData = [
  {
    id: 1,
    liveDemo: "https://nature-basket-clone-488ad1.netlify.app/",
    projectName: "Nature Basket-Clone",
    imgURL: require("./images/NatureBasket_projects1.jpg"),
    liveDemoText: "Live Demo",
    project__info:
      "Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. I designed and built landing page and footer section and it is built using HTML, CSS,JavaScript and bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: "",
    filter__word: "javascript",
  },
  {
    id: 2,
    liveDemo: "https://stellar-crisp-f229d2.netlify.app/",
    projectName: "Croma.com-Clone",
    imgURL: require("./images/Croma.com_clone.jpg"),
    liveDemoText: "Live Demo",
    project__info:
      "Croma is an Indian retail chain of consumer electronics and durables run by Infiniti Retail, a subsidiary of the Tata Group. I built and designed a responsive page for croma website and it is built using HTML, CSS, JavaScript, and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: " ",
    filter__word: "javascript",
  },
  {
    id: 3,
    liveDemo: "https://dna-india-clone.vercel.app/",
    projectName: "DNA-INDIA_Clone",
    imgURL: require("./images/DNA_INDIA_Clone.jpg"),
    liveDemoText: "Live Demo",
    project__info:
      "DNA India Covers all latest and breaking news on Politics, Business, Sports, Bollywood, technology & health etc. I designed and built a responsive page for dna_india website. Technologies used HTML5, CSS3, React, Chakra-ui and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: " ",
    filter__word: "react",
  },
  {
    id: 4,
    liveDemo: "https://survey-monkey-jx4d0956z-adityamuthal2208-gmailcom.vercel.app/",
    projectName: "SurveyMonkey_Clone",
    imgURL: require("./images/SurveyMonkey_clone.jpg"),
    liveDemoText: "Live Demo",
    project__info:
      "SurveyMonkey is a cloud-based survey tool that helps users create, send and analyze surveys. I built a responsive page for this project and it is built using HTML, CSS, chakra-ui, React and JavaScript.",
    sourceCodeText: "Source Code",
    sourceURL: "",
    filter__word: "react",
  },
  
];

const portfolioSection = {
  title: "projects",
  paragraph: `Here are some of my projects. You can check the projects out using
          live preview, and most of these projects are open source code feel
          free to take a copy of your own. I would love to receive your feedback
          about my work through an email or contact section.`,
};

const portfolioList = [
  { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  { id: 2, filtering: ".javascript", list__word: "JavaScript", active: "" },
  { id: 3, filtering: ".react", list__word: "React", active: "" },
];
const SkillsSection = {
  id: "skills",
  title: "Skills",
  // skillsImage: require("./images/skills.png"),
};

const SkillsImages = [
  {
    id: 1,
    // imgURL: require("./images/html5.svg"),
    skillName: "HTML5",
  },
  {
    id: 2,
    skillName: "CSS3",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "React",
  },
  {
    id: 5,
    skillName: "Redux",
  },
  {
    id: 6,
    skillName: "Bootstrap",
  },
  {
    id: 7,
    skillName: "Chakra-ui",
  },
  {
    id: 8,
    skillName: "JSON",
  },
  {
    id: 9,
    skillName: "API",
  },
  {
    id: 10,
    skillName: "Git-Hub",
  },
];

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: `✨ I'm a Full Stack Web Developer 👨🏻‍💻 who loves building and developing applications and websites. I'd love to combine my passion for programming and learning with my Full Stack web Developer skills to continue building 🧑‍💻 more personalized applications and websites for people.`,
  paragraph2: `I have a passion to learn everything new ❤, contributing to the progress of mankind, and show creativity and possibilities in everything I do ✨.`,
};
const AboutServices = {
  title: "services",
};

// const servicesData = [
//   {
//     id: 1,
//     serviceName: "Web development",
//     serviceImg: require("./images/undraw_version_control_9bpv.svg"),
//     serviceDescription:
//       "I can build your ideal website from scratch with the newest technologies.",
//   },
//   {
//     id: 2,
//     serviceName: "GRAPHIC DESIGN",
//     serviceImg: require("./images/undraw_design_notes_8dmv.svg"),
//     serviceDescription:
//       "I can design your website and make it beautiful to right fit your test.",
//   },
//   {
//     id: 3,
//     serviceName: "UX & UI DESIGN",
//     serviceImg: require("./images/undraw_design_tools_42tf.svg"),
//     serviceDescription:
//       "I can make the user interface and experience more appealing to users.",
//   },
//   {
//     id: 4,
//     serviceName: "SEO",
//     serviceImg: require("./images/undraw_file_searching_duff.svg"),
//     serviceDescription: "Can make your website appears on top when searching.",
//   },
// ];

const resumeData = {
  id: "resume",
  resumeInfo: ` If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.`,
  resumeAnchorText: "Download Resume",
  resumeURL: require("./download/Shubham_Gohad.pdf"),
};

const contactData = {
  id: "contact",
  contactText: "contact me",
  submitButton: "Submit",
  inputName: "Your name",
  inputEmail: "Email",
  inputSubject: "Subject",
  textArea: "message",
};

const FooterData = {
  FooterText: "find me on",
};

const footerSocialData = [
 
  {
    id: 1,
    socialName: "Linkedin",
    socialImg: "fab fa-linkedin",
    socialURL: "https://www.linkedin.com/in/aditya-muthal-41954a1a1/",
  },
  {
    id: 2,
    socialName: "Github",
    socialImg: "fab fa-github",
    socialURL: "https://github.com/adityamuthal22",
  },
  {
    id: 3,
    socialName: "Gmail-id",
    socialImg: "fa fa-envelope",
    socialURL: "mailto:adityamuthal.2208@gmail.com",
  },
  {
    id: 4,
    socialName: "Medium",
    socialImg: "fa fa-blog",
    socialURL: "https://medium.com/@adityamuthal.2208",
  },
  {
    id: 5,
    socialName: "Mobile",
    socialImg: "fa fa-mobile",
    socialURL: "tel:+918007196950",
  },

];

const copyright = {
  first__word: "Copyright",
  second__word: "Shubham Gohad 2022",
};

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
  AboutSection,
  AboutServices,
  resumeData,
  contactData,
  FooterData,
  footerSocialData,
  copyright,
};
