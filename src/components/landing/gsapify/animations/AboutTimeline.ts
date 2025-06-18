import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { theme } from '@components/landing/gsapify/Theme.ts';
import {ScrollTriggerWorker} from "@components/landing/gsapify/animations/ScrollTriggerWorker.ts";

export class AboutTimeline extends BoxBoundTimeline {
  constructor() {
    super('aboutTimeline', '#gsapBoxAbout', {
      markers: true,
      start: 'top top',
      pin: true,
      end: 'bottom top',
      snap: "labelsDirectional",
    });
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, true);
    const tl = worker.timeline;

    this.timeline.add(tl)
      .addLabel('start', 0)
      .addLabel('about', .1)
      .addLabel('passions', .35)
      .addLabel('past', .6)
      .addLabel('projects', .85)
      .addLabel('end', 1);
  }
}
