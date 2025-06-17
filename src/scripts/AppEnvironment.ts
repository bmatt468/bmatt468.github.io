import { APP_ENV } from 'astro:env/client';

class AppEnvironment {
  getEnvironment(): string {
    return APP_ENV;
  }

  isLocal(): boolean {
    return APP_ENV === 'local';
  }

  isProduction(): boolean {
    return APP_ENV === 'production';
  }

  isProd(): boolean {
    return this.isProduction();
  }
}

export const appEnvironment = new AppEnvironment();
