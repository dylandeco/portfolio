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
      duration: "2017 - 2021",
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
          title: "Full Stack Developer (Intern)",
          company: "Environment Canada",
          company_url: "",
          logo_path: "UofA.png",
          duration: "May 2021 - Dec 2021",
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
          title: "Full Stack Developer (Intern)",
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

const projects = {
  data: [
    {
      id: "0",
      name: "NewConnection",
      github: "https://github.com/Exanut/NewConnection",
      description:
        "NewConnection is a distributed social media site. This was done for my university capstone project.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Material-UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos:django-icon",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
      ],
    },
    {
      id: "1",
      name: "ProjectTracker",
      github: "",
      description:
        "A project management app used for keeping track of tasks and work done on projects.",
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
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
      ],
      images: [
        "/ProjectTracker/HomeScreen.jpg",
        "/ProjectTracker/Drawer.jpg",
        "/ProjectTracker/Portfolio.jpg",
        "/ProjectTracker/Portfolios.jpg",
        "/ProjectTracker/Project.jpg",
        "/ProjectTracker/ProjectActivity.jpg",
        "/ProjectTracker/TaskTwo.jpg",
        "/ProjectTracker/YourProfile.jpg",
        "/ProjectTracker/YourProfileTasks.jpg",
      ],
    },
    {
      id: "2",
      name: "WeatherJS",
      github: "https://github.com/dylandeco/weather-app",
      description:
        "WeatherJS is a react app to fetch 7 day forecasts for any city in the world.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Material-UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
        {
          name: "HighCharts.js",
          iconifyClass: "logos:highcharts",
        },
      ],
      images: [
        "/WeatherJS/dashboard.png",
        "/WeatherJS/search.gif",
        "/WeatherJS/login.png",
        "/WeatherJS/register.png",
      ],
    },
    {
      id: "3",
      name: "4dx",
      github: "",
      description:
        "4dx is a web app for viewing high resolution weather products such as clouds, dewpoint and jet stream at different heights and times.",
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
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
      ],
      images: [
        "/4Dx/4dxMain.PNG",
        "/4Dx/4dxTime.gif",
        "/4Dx/4dxHeight.gif",
        "/4Dx/4dxWind.PNG",
        "/4Dx/4dxCloud.PNG",
        "/4Dx/4dxDewpoint.PNG",
        "/4Dx/4dxFog.PNG",
        "/4Dx/4dxJET.PNG",
        "/4Dx/4dxKindex.PNG",
        "/4Dx/4dxLiftedIndex.PNG",
        "/4Dx/4dxThetaW.PNG",
        "/4Dx/4dxVorticity.PNG",
      ],
    },
    {
      id: "4",
      name: "SiteReferences",
      github: "",
      description:
        "A web app for displaying local area information at airports. Mainly used by new meteorologists to get familiar with airports across Canada.",
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
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "HighCharts.js",
          iconifyClass: "logos:highcharts",
        },
      ],
      images: [
        "/SiteReferences/SiteRefsMain.PNG",
        "/SiteReferences/SiteRefsOverview.gif",
        "/SiteReferences/SiteRefsLanding.PNG",
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
  projects,
};
