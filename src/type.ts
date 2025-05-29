import { LucideIcon } from "lucide-react";

export interface NavigationMenu {
  text: string;
  href: string;
}

export interface PersonalSkill {
  name: string;
  since: string;
  score: string;
}

export interface SocialLink {
  icon: LucideIcon;
  name: string;
  url: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

export interface FeatureProject {
  name: string;
  imgUrl: string;
  techs: string[];
  gitHubLink: string;
  websiteLink: string;
  peekDescription: string;
  fullDescription: string;
  year: string;
}
