// Experience Types
export interface ExperienceNode {
  timeframe: string;
  title: string;
  company: string;
  skillIcons: string[];
}

// Footer Types
export interface FooterLink {
  description: string;
  icon: string;
  url: string;
  target?: string;
}
