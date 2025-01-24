import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aditya Ibrar",
  lastName: "Abdillah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Flutter Mobile Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adityaibrar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aditya-ibrar-abdillah/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityaibrar@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Flutter Mobile Developer</>,
  subline: (
    <>
      I'm Ibrar, a Mobile engineer , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Information Technology student with a strong foundation in
        mobile application development, specializing in creating efficient and
        user-friendly solutions. With a focus on precision and performance, I
        strive to ensure every application runs smoothly and meets high-quality
        standards. I am highly adaptable and continuously update my knowledge of
        emerging technologies and trends. My ability to work both independently
        and collaboratively, combined with strong analytical and problem-solving
        skills, enables me to contribute effectively to achieving project goals
        while maintaining a focus on delivering exceptional user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Badan Amil Zakat Nasional (BAZNAS)",
        timeframe: "Sep 2024 - Dec 2024",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Developed a mobile-based application to support the BAZNAS work
            system.
          </>,
          <>Implementing Agile Scrum method in project development.</>,
          <>
            Slicing UI/UX design from Figma into application views using
            Flutter.
          </>,
          <>
            Using Clean Architecture with state management Provider for
            organized application structure and flow.
          </>,
          <>
            Contribute to the design and testing of application features to
            ensure functionality meets user needs.
          </>,
          <>
            Published the application to the App Store, ensuring proper
            compliance with platform guidelines.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Telkom Indonesia",
        timeframe: "Sep 2019 - Feb 2020",
        role: "Network Technician",
        achievements: [
          <>
            Assist technicians in performing server maintenance to keep system
            performance optimized.
          </>,
          <>
            Manage the network, including handling network disruptions and
            ensuring smooth connections.
          </>,
          <>
            Monitor and analyze attenuation levels of fiber optic cables to
            ensure signal quality.
          </>,
          <>
            Performed installation and configuration of Wi-Fi in customers'
            homes according to company standards.
          </>,
        ],
        images: [],
      },
    ],
  },
  educations: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Polytechnic State Of Jember",
        description: <>Diploma of Education Information Technology.</>,
      },
      {
        name: "SMK Nurul Islam Jember",
        description: <>Computer and network engineering.</>,
      },
    ],
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

export { person, social, home, about };
