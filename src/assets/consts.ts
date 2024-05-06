export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const navItems = [
  { name: '_about()', id: 'about' },
  { name: '_resume()', id: 'resume' },
  { name: '_projects()', id: 'projects' },
  { name: '_contact()', id: 'contact' },
];

export const about =
  'I was always passionate about computers and electronic devices since I was 7, always wondering how these things inside the screen move and how to make them yourself.-My coding journey began in 2017 in high school, where I learned some algorithms. After high school, I joined 1337 coding school in 2021, where I learned the basics of programming. I spent 2 years building awesome projects with C and C++ like Minishell, Webserv, Cub3D, and more. I got into web development last year when I built my first web project with NextJs and NestJs. I had lots of fun building it with my team. That was the last project in the common core before going out on an internship.-During my internship, I developed my skills in web development, learned a lot of new technologies, and got introduced to mobile development using Flutter. It was a great experience learning and working with the team, and I am looking forward to learning more and building more awesome projects.';

export const oraTech = {
  position: 'software Developer Intern',
  place: 'Ora Technologies, Casablanca-Morocco',
  date: 'Oct 2023 - Mar 2024',
  description:
    'Ora Technologies is a super App that makes buying and selling online easier and more accessible to all Moroccans. its mission is to empower people to build their own businesses and improve their lives.',
  technologies: [
    'Flutter',
    'Dart',
    'NestJs',
    'TypeScript',
    'PostgreSQL',
    'Git',
    'jest',
  ],
};

export const projects: Project[] = [
  {
    title: 'PongYo',
    description:
      'PongYo is a web-site platform that allows you to play pong with your friends online, as well as chat with them.',
    technologies: [
      'NextJs',
      'TailwindCSS',
      'Socket.io',
      'TypeScript',
      'NestJs',
      'PostgreSQL',
    ],
    github: 'https://github.com/4DeR99/PongYo',
  },
  {
    title: 'Portfolio',
    description:
      'This is my portfolio where I showcase my projects and skills. I built it using React, TailwindCSS, and Typescript.',
    technologies: ['React', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/4DeR99/portfolio-v1.0',
    demo: 'https://4der.vercel.app/',
  },
  {
    title: 'Meals App',
    description:
      'Meals App is a mobile application that helps you find the best meals around you, built with Flutter and Bloc pattern for state management.',
    technologies: ['Flutter', 'Dart', 'Bloc'],
    github: 'https://github.com/4DeR99/Meals_app',
  },
  {
    title: 'Creon',
    description: 'A landing page built with nextJs and TailwindCSS.',
    technologies: ['NextJs', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/4DeR99/Creon',
    demo: 'https://creon-liart.vercel.app/',
  },
  {
    title: 'Webserv',
    description:
      'Webserv is a custom web server built from scratch using C++ and C. It supports GET, POST, PUT, DELETE, and more HTTP methods.',
    technologies: ['C', 'C++', 'HTTP 1.1'],
    github: 'https://github.com/4DeR99/webserv',
  },
];

export const contact =
  'I am always on the lookout for new challenges and opportunities to learn and grow. If you have a project or idea that you think I could help with, I would love to hear from you. Please feel free to get in touch via the contact button below or through any of the social media links.';
