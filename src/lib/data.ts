import { type Skill, type Experience, type Project, type Education } from "@/lib/types";
import { Github, Code, Database, Server, Cloud, Package, Network, BrainCircuit } from 'lucide-react';
import { JavaIcon } from "@/components/icons/java-icon";
import { SpringBootIcon } from "@/components/icons/spring-boot-icon";
import { NodeJsIcon } from "@/components/icons/node-js-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { DockerIcon } from "@/components/icons/docker-icon";
import { FirebaseIcon } from "@/components/icons/firebase-icon";

export const skills: Skill[] = [
  { name: "Java", icon: JavaIcon },
  { name: "Spring Boot", icon: SpringBootIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "REST APIs", icon: Network },
  { name: "Microservices", icon: Server },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "SQL & NoSQL", icon: Database },
  { name: "Agile", icon: BrainCircuit },
  { name: "React", icon: ReactIcon },
];

export const workExperience: Experience[] = [
  {
    jobTitle: "Senior Software Engineer",
    company: "Global Tech Inc.",
    years: "2020 - Present",
    description: "Led the development of scalable microservices using Java and Spring Boot. Designed and implemented RESTful APIs for our client-facing applications. Mentored junior engineers and promoted best practices in an Agile environment."
  },
  {
    jobTitle: "Software Engineer",
    company: "Innovate Solutions",
    years: "2018 - 2020",
    description: "Developed and maintained full-stack web applications. Worked with both backend systems in Node.js and frontend components in React. Gained experience with cloud infrastructure on AWS and CI/CD pipelines."
  },
  {
    jobTitle: "Software Development Intern",
    company: "Local Startup",
    years: "2017",
    description: "Assisted the engineering team in developing new features for a SaaS product. Wrote unit tests, fixed bugs, and participated in daily stand-ups and code reviews."
  }
];

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        university: "University of Chile",
        years: "2014 - 2018"
    },
    {
        degree: "Certified Spring Professional",
        university: "VMware",
        years: "2021"
    }
];

export const projects: Project[] = [
  {
    name: "Spring Boot & Keycloak SSO",
    description: "Example of exposing APIs with Spring Boot and securing them with Keycloak for Single Sign-On.",
    tags: ["Java", "Spring Boot", "Keycloak", "Docker", "Security"],
    githubUrl: "https://github.com/IBrito993/spring-boot-keycloak",
  },
  {
    name: "Microservices Config Server",
    description: "A centralized configuration server for microservices using Spring Cloud Config.",
    tags: ["Java", "Spring Cloud", "Microservices", "Docker"],
    githubUrl: "https://github.com/IBrito993/ms-config-properties",
  },
  {
    name: "CQRS & Event Sourcing Example",
    description: "An implementation of CQRS and Event Sourcing patterns using Axon Framework and Spring Boot.",
    tags: ["Java", "Spring Boot", "Axon", "CQRS", "Event Sourcing"],
    githubUrl: "https://github.com/IBrito993/cqrs-es-example-java",
  },
  {
    name: "Personal Portfolio",
    description: "My personal portfolio website built with React and TypeScript. You're looking at it!",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    githubUrl: "https://github.com/IBrito993/portfolio-react",
  },
];

export const aboutContent = "With over 5 years in software development, I specialize in backend systems, automation, APIs, and full-stack web applications. I enjoy working with Java, microservices, cloud infrastructure, and lean/agile principles."
export const projectsContent = "A selection of my personal projects. I'm passionate about exploring new technologies and building useful applications. Here are some of the projects I've worked on, showcasing my skills in backend development, system design, and security."
export const resumeContent = "My professional journey in software engineering, highlighting my roles, responsibilities, and key achievements. I have a strong background in computer science and a passion for continuous learning and professional growth."
export const contactContent = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out to me via the form below or connect with me on social media."
