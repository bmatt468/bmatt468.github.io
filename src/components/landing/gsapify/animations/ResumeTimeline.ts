import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume');
  }

  init(): void {}
}
