export abstract class BaseTimeline {
  public timeline: gsap.core.Timeline;
  public readonly id: string;

  protected constructor(id: string, timeline: gsap.core.Timeline) {
    this.id = id;
    this.timeline = timeline;
  }

  registerNavigationAnimation(target: string): void {
    this.timeline.to(
      target,
      {
        '--scaleBackground': 1,
        duration: 1,
        ease: 'none',
      },
      0
    );
  }

  abstract init(): void;
}
