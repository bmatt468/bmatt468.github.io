import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { NavigationStatus } from '@components/landing/gsapify/Navigation.ts';
import { gsap } from 'gsap';

export interface BoxBoundTimelineConfig {
  start?: string;
  end?: string;
  markers?: boolean;
  pin?: string | boolean;
  pinReparent?: boolean;
  snap?: 'labels' | 'labelsDirectional' | number;
}

const defaultBoxBoundTimelineConfig: Required<BoxBoundTimelineConfig> = {
  start: 'top bottom',
  end: 'top top',
  markers: false,
  pin: false,
  pinReparent: false,
  snap: 0,
};

export abstract class BoxBoundTimeline extends BaseTimeline {
  public readonly triggerElem: string;

  protected constructor(
    id: string,
    triggerElem: string,
    timelineStart?: BoxBoundTimelineConfig
  ) {
    const config = { ...defaultBoxBoundTimelineConfig, ...timelineStart };

    let timeline = gsap.timeline({
      id: id,
      scrollTrigger: {
        trigger: triggerElem,
        start: config.start,
        end: config.end,
        scrub: true,
        markers: config.markers,
        pin: config.pin,
        pinReparent: config.pinReparent,
        snap: config.snap,
      },
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
