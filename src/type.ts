import { LucideIcon } from "lucide-react";

export interface NavigationMenu {
  text: string;
  href: string;
}

export interface PersonalSkill {
  name: string;
  since: string;
  score: number;
}

export interface SocialLink {
  icon: LucideIcon;
  name: string;
  url: string;
}

export interface Experience {
  date: string;
  title: string;
  position: string;
  company: string;
  description: string;
  skills: string[];
}

export interface FeaturedProject {
  name: string;
  imgUrl: string;
  techs: string[];
  gitHubLink: string;
  websiteLink: string;
  peekDescription: string;
  fullDescription: string;
  year: string;
}

export interface Library {
  name: string;
  imgUrl?: string;
  version: string;
  description: string;
  tags: string[];
  stats?: { stars: string; downloads: string };
  status: string;
  npmLink?: string;
  websiteLink?: string;
}
