import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';
import {ScrollTriggerWorker} from "@components/landing/gsapify/animations/ScrollTriggerWorker.ts";

export class ResumeTimeline extends BoxBoundTimeline {
  constructor() {
    super('resumeTimeline', '#gsapBoxResume');
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, true);
    const tl = worker.timeline;

    this.timeline.add(tl);
  }
}
