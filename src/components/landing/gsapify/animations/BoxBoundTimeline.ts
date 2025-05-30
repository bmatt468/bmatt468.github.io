import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { gsap } from 'gsap';

export abstract class BoxBoundTimeline extends BaseTimeline {
  public readonly triggerElem: string;

  protected constructor(
    id: string,
    triggerElem: string,
    timelineStart: string = 'top bottom',
    timelineEnd: string = 'top top'
  ) {
    let timeline = gsap.timeline({
      id: id,
      scrollTrigger: {
        trigger: triggerElem,
        start: timelineStart,
        end: timelineEnd,
        scrub: true,
        markers: true,
        onEnter: () => console.log(`[${id}] Entered viewport`),
        onLeave: () => console.log(`[${id}] Reached top`),
        onEnterBack: () => console.log(`[${id}] Re-entered from below`),
        onLeaveBack: () => console.log(`[${id}] Left viewport downward`),
      },
    });

    super(id, timeline);

    this.triggerElem = triggerElem;
  }

  abstract init(): void;
}
