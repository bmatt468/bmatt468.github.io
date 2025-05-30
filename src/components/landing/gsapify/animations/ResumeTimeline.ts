import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { background } from '@components/landing/gsapify/Background.ts';

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume');
  }

  init(): void {
    this.shiftBackground();
  }

  shiftBackground(): void {
    this.timeline.addLabel('shiftBackground').to(
      background.elem,
      {
        backgroundColor: 'oklch(0.931 0.017 248.216)',
        duration: 1,
        ease: 'none',
      },
      0
    );
  }
}
