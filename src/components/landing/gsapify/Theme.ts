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
        light: '#000000',
        dark: '#000000',
      },
      resume: {
        light: '#000000',
        dark: '#000000',
      },
      about: {
        light: '#000000',
        dark: '#000000',
      },
      skills: {
        light: '#000000',
        dark: '#000000',
      },
      experience: {
        light: '#000000',
        dark: '#000000',
      },
      projects: {
        light: '#000000',
        dark: '#000000',
      },
      contact: {
        light: '#000000',
        dark: '#000000',
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
