import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class ContactTimeline extends BoxBoundTimeline {
  constructor() {
    super('contactTimeline', '#gsapBoxContact');
  }

  init(): void {
    this.shiftColorables(theme.getSectionBackground('contact'));
  }
}
