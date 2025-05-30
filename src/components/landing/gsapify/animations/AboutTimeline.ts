import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { background } from '@components/landing/gsapify/Background.ts';

export class AboutTimeline extends BoxBoundTimeline {
  constructor() {
    super('aboutTimeline', '#gsapBoxAbout');
  }

  init(): void {
    this.shiftBackground();
  }

  shiftBackground(): void {
    this.timeline.addLabel('shiftBackground').to(
      '.background-colorable',
      {
        backgroundColor: 'oklch(0.493 0.061 223.7)',
        duration: 1,
        ease: 'none',
      },
      0
    );
  }
}
