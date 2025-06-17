import { timelineRegistry } from '@components/landing/gsapify/animations/TimelineRegistry.ts';

export abstract class BaseTimeline {
  public timeline: gsap.core.Timeline;
  public readonly id: string;

  protected constructor(id: string, timeline: gsap.core.Timeline) {
    this.id = id;
    this.timeline = timeline;
    timelineRegistry.register(this);
  }

  registerNavigationAnimation(target: string): void {
    this.timeline.to(
      target,
      {
        '--scaleBackground': 1,
        duration: 1,
        delay: 0.25,
        ease: 'none',
      },
      0
    );
  }

  shiftColorables(color: string): void {
    // TODO: Revisit
    // this.timeline.to(
    //   '.background-colorable',
    //   {
    //     backgroundColor: color,
    //     duration: 1,
    //     ease: 'none',
    //   },
    //   0
    // );

    // TODO: Suppress TS hint in a better way
    if (color === 'purple') {
      console.log(color);
    }
  }

  abstract init(): void;
}
