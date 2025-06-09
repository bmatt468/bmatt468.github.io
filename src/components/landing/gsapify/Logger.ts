import chalk from 'chalk';

const log = console.log;

class Logger {
  shouldLog(): boolean {
    return false;
  }

  logInfo(caller: string, message: string): void {
    if (this.shouldLog()) {
      log(chalk.bgCyan(`💡 ${chalk.bold('[%s]')} %s`), caller, message);
    }
  }

  logTimelineEvent(timeline: string, message: string): void {
    if (this.shouldLog()) {
      log(chalk.blue(`⏰ ${chalk.bold('[%s]')} %s`), timeline, message);
    }
  }
}

export const logger = new Logger();
