import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { logger } from '@components/landing/gsapify/Logger.ts';
import { gsap } from 'gsap';
import { color } from 'unist-util-visit-parents/do-not-use-color';

export abstract class BoxBoundTimeline extends BaseTimeline {
  public readonly triggerElem: string;

  protected constructor(
    id: string,
    triggerElem: string,
    timelineStart: string = 'top bottom',
    timelineEnd: string = 'top top'
  ) {
    logger.logInfo(id, 'Initializing timeline');
    let timeline = gsap.timeline({
      id: id,
      scrollTrigger: {
        trigger: triggerElem,
        start: timelineStart,
        end: timelineEnd,
        scrub: true,
        markers: true,
        onEnter: () => logger.logTimelineEvent(id, 'Entered viewport'),
        onLeave: () => logger.logTimelineEvent(id, 'Reached top'),
        onEnterBack: () => logger.logTimelineEvent(id, 'Re-entered from below'),
        onLeaveBack: () =>
          logger.logTimelineEvent(id, 'Left viewport downward'),
      },
    });

    super(id, timeline);

    this.triggerElem = triggerElem;
  }

  abstract init(): void;
}
