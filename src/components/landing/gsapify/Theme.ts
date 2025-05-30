import { colors } from '@components/landing/gsapify/Colors.ts';

interface ThemeMap {
  [key: string]: ThemeTuple;
}

interface ThemeTuple {
  light: string;
  dark: string;
}

enum DataTheme {
  Light = 'light',
  Dark = 'dark',
}

class Theme {
  private readonly dataTheme: DataTheme;
  private readonly sectionBackgrounds: ThemeMap = {};

  constructor() {
    this.dataTheme = DataTheme.Light;
    this.sectionBackgrounds = {
      hero: {
        light: colors.get('abbey-100'),
        dark: colors.get('abbey-1050'),
      },
      resume: {
        light: colors.get('slate-100'),
        dark: colors.get('bismark-950'),
      },
      about: {
        light: colors.get('abbey-200'),
        dark: colors.get('abbey-1000'),
      },
      skills: {
        light: colors.get('abbey-50'),
        dark: colors.get('abbey-950'),
      },
      experience: {
        light: colors.get('abbey-200'),
        dark: colors.get('abbey-1050'),
      },
      projects: {
        light: colors.get('abbey-50'),
        dark: colors.get('bismark-950'),
      },
      contact: {
        light: colors.get('abbey-300'),
        dark: colors.get('abbey-1000'),
      },
    };
  }

  getSectionBackground(section: string): string {
    let background = this.sectionBackgrounds[section];

    if (!background) {
      throw new Error(`No background found for section ${section}`);
    }

    return background[this.dataTheme];
  }
}

export const theme = new Theme();
