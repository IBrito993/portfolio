import type { LucideIcon } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type Icon = LucideIcon | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element);

export interface Skill {
  name: string;
  icon: Icon;
}

export interface Experience {
  jobTitle: string;
  company: string;
  years: string;
  description: string;
}

export interface Education {
    degree: string;
    university: string;
    years: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}
