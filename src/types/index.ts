export interface SiteConfig extends HeaderProps {
  title: string;
  description: string[];
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  education: EducationProps[];
  projects: ProjectProps[];
  services: ServiceProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string[];
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  stack: { [key: string]: string[] };
  logo: string;
}

// Education Formal Academy and Informal (MOOCs)
export interface EducationProps {
  educationType: string | "Informal" | "Formal";
  institution: string;
  instructor: string | null; // null for Formal
  degree: string;
  certificate: string | null; // null for Formal
  dissertation: string | null;
  dissertationLink: string | null;
  startDate: string;
  endDate: string;
  courses:
    | {
        name: string;
        certificate: string;
      }[]
    | null;
  logo: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  technologies?: string[];
}

export interface AboutProps {
  description: string[];
  image: string;
  email: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
