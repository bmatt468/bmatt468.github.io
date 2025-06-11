import chalk from 'chalk';

const log = console.log;
const b = chalk.bold;

class Logger {
  shouldLog(): boolean {
    return false;
  }

  logInfo(caller: string, message: string, force: boolean = false): void {
    if (this.shouldLog() || force) {
      log(chalk.bgCyan(`💡 ${b('[%s]')} %s`), caller, message);
    }
  }

  logTimelineEvent(
    timeline: string,
    message: string,
    force: boolean = false
  ): void {
    if (this.shouldLog() || force) {
      log(chalk.blue(`⏰ ${b('[%s]')} %s`), timeline, message);
    }
  }

  logWorkerTimelineLabel(
    worker: string,
    label: string,
    workerPosition: number,
    parent: string,
    parentPosition: number,
    force: boolean = false
  ): void {
    if (this.shouldLog() || force) {
      log(
        chalk.yellow(`🏷️ ${b('[%s]')} %s\n` + `⌖ %s\n` + `📦 ${b('[%s]')} %s`),
        worker,
        label,
        workerPosition,
        parent,
        parentPosition
      );
    }
  }
}

export const logger = new Logger();
