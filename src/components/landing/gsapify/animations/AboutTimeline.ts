import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

export class AboutTimeline extends BoxBoundTimeline {
  constructor() {
    super('aboutTimeline', '#gsapBoxAbout');
  }

  init(): void {}
}
