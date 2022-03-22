//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Dylan",
  logo_name: "dylan.d()",
  nickname: "dyl",
  full_name: "Dylan DeCoursey",
  subTitle: "Full Stack Developer 🔥. Always learning.",
  resumeLink: "",
  mail: "mailto:decourse@ualberta.ca",
};

const socialMediaLinks = {
  github: "https://github.com/dylandeco",
  linkedin: "https://www.linkedin.com/in/dylandeco/",
  gmail: "decourse@ualberta.ca",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces for your web applications",
        "⚡ Building responsive website front end using React and Vue",
        "⚡ Creating application backend in Node with Express.js",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Univerity of Alberta",
      subtitle: "Bachelor of Science in Computing Science",
      logo_path: "UofA.png",
      alt_name: "UofA",
      duration: "2017 - 2022",
      descriptions: [
        "• Web Applications and Architecture",
        "• Software Engineering",
        "• File and Database Management",
        "• Algorithms",
      ],
      website_link: "https://www.ualberta.ca/index.html",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I've completed two internships, both with Environment Canada doing Software Development. More specifically, I worked with the Canadian Meteorological Aviation Centre. During my time there I wrote a variety of web applications to assist both managers and metoerologists. You can see some of the work I did there on the projects page.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer (Intern)",
          company: "Environment Canada",
          company_url: "",
          logo_path: "UofA.png",
          duration: "May 2021 - Present",
          location: "Remote",
          description: [
            "• Developed a project-tracking tool for management and staff for local projects",
            "• Optimized a 4-dimensional weather data app, decreasing load times by threefold",
            "• Created a web-based tool to manage backups of MySQL databases using PHP",
            "• Implemented new methodologies and tools for analyzing climate data",
            "• Mentored interns and served as a first point of contact for questions",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Developer (Intern)",
          company: "Environment Canada",
          company_url: "",
          logo_path: "UofA.png",
          duration: "May 2019 - Sept 2020",
          location: "Office",
          description: [
            "• Developed web-based tools to assist meteorologists, management, and clients",
            "• Developed a Wiki-like application for conveying local area information at airports",
            "• Implemented a web-based logging mechanism for 24/7 forecasting operations",
            "• Created an interactive webapp to visualize 4-dimensional weather data",
            "• Automated email reports to managers using cron jobs",
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "This is a showcase of both projects I have completed at work and projects that I have completed for school or as side projects",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description:
        "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
