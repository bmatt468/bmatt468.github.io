import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { background } from '@components/landing/gsapify/Background.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';
import {logger} from "@components/landing/gsapify/Logger.ts";

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('resume'));
  }
}
