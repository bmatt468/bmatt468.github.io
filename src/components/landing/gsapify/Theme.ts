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
        light: '#000000', //abbey-100
        dark: '#000000', //abbey-1050
      },
      resume: {
        light: '#000000', //slate-100
        dark: '#000000', // bismark-950
      },
      about: {
        light: '#000000', //gray-200
        dark: '#000000', //abbey-1000
      },
      skills: {
        light: '#000000', //abbey-50
        dark: '#000000', //abbey-950
      },
      experience: {
        light: '#000000', //abbey-100
        dark: '#000000', //abbey-1050
      },
      projects: {
        light: '#000000', //slate-100
        dark: '#000000', //bismark-950
      },
      contact: {
        light: '#000000', //gray-200
        dark: '#000000', //abbey-1000
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
