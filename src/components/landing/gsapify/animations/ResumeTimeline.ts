import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { ScrollTriggerWorker } from '@components/landing/gsapify/animations/ScrollTriggerWorker.ts';

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume', {
      end: 'top -100px',
      markers: false,
    });
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, false);
    const tl = worker.timeline;

    this.timeline.add(tl);
  }
}
