import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { ScrollTriggerWorker } from '@components/landing/gsapify/animations/ScrollTriggerWorker.ts';

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume');
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, false);
    const tl = worker.timeline;
    tl.set('#landing-space-image-wrapper', {
      autoAlpha: 0,
    }, 'end');
    this.timeline.add(tl);
  }
}
