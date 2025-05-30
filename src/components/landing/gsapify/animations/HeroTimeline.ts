import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { timelineRegistry } from '@components/landing/gsapify/animations/TimelineRegistry.ts';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export class HeroTimeline extends BoxBoundTimeline {
  private titleSplit: SplitText;
  private subtitleSplit: SplitText;

  constructor() {
    let timeline = gsap.timeline({});
    super('heroTimeline', '#gsapBoxHero', 'bottom bottom', 'bottom top');
    timelineRegistry.register(this);

    // create the splits
    this.titleSplit = SplitText.create('#hero-title', {
      type: 'chars',
      smartWrap: true,
      aria: 'auto',
    });

    this.subtitleSplit = SplitText.create('#hero-subtitle', {
      type: 'chars',
      smartWrap: true,
      aria: 'auto',
    });

    gsap.set('#hero-title', { autoAlpha: 1 });
    gsap.set('#hero-subtitle', { autoAlpha: 1 });
  }

  init() {
    gsap.fromTo(
      this.titleSplit.chars,
      { x: 50, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
      }
    );

    gsap
      .to(this.subtitleSplit.chars, {
        x: -50,
        autoAlpha: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.035,
        delay: 0.65,
      })
      .reverse(0);
  }
}
