import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { ScrollTriggerWorker } from '@components/landing/gsapify/animations/ScrollTriggerWorker.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume', {
      end: 'top -100px',
      markers: true,
    });
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, true);
    const tl = worker.timeline;

    this.timeline.add(tl);
  }
}
