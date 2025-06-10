import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { logger } from '@components/landing/gsapify/Logger.ts';
import { NavigationStatus } from '@components/landing/gsapify/Navigation.ts';
import { gsap } from 'gsap';

export abstract class BoxBoundTimeline extends BaseTimeline {
  public readonly triggerElem: string;

  protected constructor(
    id: string,
    triggerElem: string,
    timelineStart: string = 'top bottom',
    timelineEnd: string = 'top top',
    pin: boolean = false
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
        pin: pin,
        onEnter: () => logger.logTimelineEvent(id, 'Entered viewport'),
        onLeave: () => logger.logTimelineEvent(id, 'Reached top'),
        onEnterBack: () => logger.logTimelineEvent(id, 'Re-entered from below'),
        onLeaveBack: () =>
          logger.logTimelineEvent(id, 'Left viewport downward'),
      },
      onStart: () => logger.logTimelineEvent(id, 'Timeline started'),
      onComplete: () => logger.logTimelineEvent(id, 'Timeline completed'),
    });

    super(id, timeline);

    this.triggerElem = triggerElem;
  }

  abstract init(): void;

  getNavigationStatus(): NavigationStatus {
    const progress = this.timeline.scrollTrigger?.progress;

    if (progress === undefined) {
      throw new Error(`${this.timeline.id} has no scrollTrigger`);
    }

    if (progress === 0) {
      return NavigationStatus.NotStarted;
    }

    if (progress === 1) {
      return NavigationStatus.Complete;
    }

    return NavigationStatus.InProgress;
  }
}
