import type { SkillIcon } from '../env';

export const skillIcons: { [key: string]: SkillIcon } = {
  alpine: {
    darkIcon: 'skill-icons:alpinejs-dark',
    lightIcon: 'skill-icons:alpinejs-light',
    tooltip: 'Alpine.js',
  },

  angular: {
    darkIcon: 'skill-icons:angular-dark',
    lightIcon: 'skill-icons:angular-light',
    tooltip: 'Angular',
  },

  ansible: {
    darkIcon: 'skill-icons:ansible',
    lightIcon: 'skill-icons:ansible',
    tooltip: 'Ansible',
  },

  astro: {
    darkIcon: 'skill-icons:astro',
    lightIcon: 'skill-icons:astro',
    tooltip: 'Astro Framework',
  },

  aws: {
    darkIcon: 'skill-icons:aws-dark',
    lightIcon: 'skill-icons:aws-light',
    tooltip: 'AWS',
  },

  bash: {
    darkIcon: 'skill-icons:bash-dark',
    lightIcon: 'skill-icons:bash-light',
    tooltip: 'Bash Scripting',
  },

  cloudflare: {
    darkIcon: 'skill-icons:cloudflare-dark',
    lightIcon: 'skill-icons:cloudflare-light',
    tooltip: 'Cloudflare',
  },

  csharp: {
    darkIcon: 'skill-icons:cs',
    lightIcon: 'skill-icons:cs',
    tooltip: 'C#',
  },

  docker: {
    darkIcon: 'skill-icons:docker',
    lightIcon: 'skill-icons:docker',
    tooltip: 'Docker',
  },

  dotnet: {
    darkIcon: 'skill-icons:dotnet',
    lightIcon: 'skill-icons:dotnet',
    tooltip: '.NET',
  },

  dynamodb: {
    darkIcon: 'skill-icons:dynamodb-dark',
    lightIcon: 'skill-icons:dynamodb-light',
    tooltip: 'DynamoDB',
  },

  github: {
    darkIcon: 'skill-icons:github-dark',
    lightIcon: 'skill-icons:github-light',
    tooltip: 'GitHub',
  },

  githubactions: {
    darkIcon: 'skill-icons:githubactions-dark',
    lightIcon: 'skill-icons:githubactions-light',
    tooltip: 'GitHub Actions',
  },

  go: {
    darkIcon: 'skill-icons:golang',
    lightIcon: 'skill-icons:golang',
    tooltip: 'Go',
  },

  javascript: {
    darkIcon: 'skill-icons:javascript',
    lightIcon: 'skill-icons:javascript',
    tooltip: 'JavaScript',
  },

  jenkins: {
    darkIcon: 'skill-icons:jenkins-dark',
    lightIcon: 'skill-icons:jenkins-light',
    tooltip: 'Jenkins',
  },

  laravel: {
    darkIcon: 'skill-icons:laravel-dark',
    lightIcon: 'skill-icons:laravel-light',
    tooltip: 'Laravel',
  },

  latex: {
    darkIcon: 'skill-icons:latex-dark',
    lightIcon: 'skill-icons:latex-light',
    tooltip: 'LaTeX',
  },

  less: {
    darkIcon: 'skill-icons:less-dark',
    lightIcon: 'skill-icons:less-light',
    tooltip: 'Less',
  },

  mysql: {
    darkIcon: 'skill-icons:mysql-dark',
    lightIcon: 'skill-icons:mysql-light',
    tooltip: 'MySQL',
  },

  notion: {
    darkIcon: 'skill-icons:notion-dark',
    lightIcon: 'skill-icons:notion-light',
    tooltip: 'Notion',
  },

  php: {
    darkIcon: 'skill-icons:php-dark',
    lightIcon: 'skill-icons:php-light',
    tooltip: 'PHP',
  },

  phpstorm: {
    darkIcon: 'skill-icons:phpstorm-dark',
    lightIcon: 'skill-icons:phpstorm-light',
    tooltip: 'PhpStorm',
  },

  powershell: {
    darkIcon: 'skill-icons:powershell-dark',
    lightIcon: 'skill-icons:powershell-light',
    tooltip: 'Powershell',
  },

  python: {
    darkIcon: 'skill-icons:python-dark',
    lightIcon: 'skill-icons:python-light',
    tooltip: 'Python',
  },

  pytorch: {
    darkIcon: 'skill-icons:pytorch-dark',
    lightIcon: 'skill-icons:pytorch-light',
    tooltip: 'PyTorch',
  },

  r: {
    darkIcon: 'skill-icons:r-dark',
    lightIcon: 'skill-icons:r-light',
    tooltip: 'R',
  },

  react: {
    darkIcon: 'skill-icons:react-dark',
    lightIcon: 'skill-icons:react-light',
    tooltip: 'React',
  },

  redis: {
    darkIcon: 'skill-icons:redis-dark',
    lightIcon: 'skill-icons:redis-light',
    tooltip: 'Redis',
  },

  sass: {
    darkIcon: 'skill-icons:sass',
    lightIcon: 'skill-icons:sass',
    tooltip: 'Sass',
  },

  tailwindcss: {
    darkIcon: 'skill-icons:tailwindcss-dark',
    lightIcon: 'skill-icons:tailwindcss-light',
    tooltip: 'Tailwind CSS',
  },

  terraform: {
    darkIcon: 'skill-icons:terraform-dark',
    lightIcon: 'skill-icons:terraform-light',
    tooltip: 'Terraform',
  },

  typescript: {
    darkIcon: 'skill-icons:typescript',
    lightIcon: 'skill-icons:typescript',
    tooltip: 'Typescript',
  },

  vue: {
    darkIcon: 'skill-icons:vuejs-dark',
    lightIcon: 'skill-icons:vuejs-light',
    tooltip: 'Vue.js',
  },

  wordpress: {
    darkIcon: 'skill-icons:wordpress',
    lightIcon: 'skill-icons:wordpress',
    tooltip: 'Wordpress',
  },
};

export function getSkillIcon(skill: string): SkillIcon {
  const icon = skillIcons[skill];

  if (!icon) {
    throw new ReferenceError(
      `Unknown skill icon reference: "${skill}".\nValid options: ${Object.keys(skillIcons).join(', ')}`
    );
  }

  return icon;
}

export function getSkillIcons(skills: string[]): Array<SkillIcon> {
  let skillIcons: Array<SkillIcon> = [];

  for (const skill of skills) {
    skillIcons.push(getSkillIcon(skill));
  }

  return skillIcons;
}

export function getAllSkillIcons(): Array<SkillIcon> {
  return Object.values(skillIcons);
}
