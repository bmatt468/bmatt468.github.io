// Head types
export interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  site?: string;
}

// Experience Types
export interface ExperienceNode {
  timeframe: string;
  title: string;
  company: string;
  skillIcons: Array<SkillIcon>;
}

export interface SkillIcon {
  lightIcon: string;
  darkIcon: string;
  tooltip?: string;
}

// Footer Types
export interface FooterLink {
  description: string;
  icon: string;
  url: string;
  target?: string;
}
