import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { timelineRegistry } from '@components/landing/gsapify/animations/TimelineRegistry.ts';

export class HeroTimeline extends BaseTimeline {
  constructor() {
    let timeline = gsap.timeline({});
    super('heroTimeline', timeline);
    timelineRegistry.register(this);
  }

  init() {}
}
