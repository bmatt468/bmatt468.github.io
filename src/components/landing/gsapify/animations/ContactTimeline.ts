import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

export class ContactTimeline extends BoxBoundTimeline {
  constructor() {
    super('contactTimeline', '#gsapBoxContact');
  }

  init(): void {}
}
