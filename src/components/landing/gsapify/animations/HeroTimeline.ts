import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export class HeroTimeline extends BoxBoundTimeline {
  private titleSplit: SplitText;
  private subtitleSplit: SplitText;
  private titleSelector: string = '#hero-title';
  private subtitleSelector: string = '#hero-subtitle';

  constructor() {
    super('heroTimeline', '#gsapBoxHero', 'bottom bottom', 'bottom top');

    // create the splits
    this.titleSplit = SplitText.create(this.titleSelector, {
      type: 'chars',
      smartWrap: true,
      aria: 'auto',
    });

    this.subtitleSplit = SplitText.create(this.subtitleSelector, {
      type: 'chars',
      smartWrap: true,
      aria: 'auto',
    });

    gsap.set(this.titleSelector, { autoAlpha: 0 });
    gsap.set(this.subtitleSelector, { autoAlpha: 0 });
  }

  init() {}

  animateText(): void {
    const initialTimelineProgress = this.timeline.scrollTrigger?.progress ?? -1;

    const tl = gsap.timeline({ paused: true });

    // if the position is 0, then the timeline is at the top of the page and should do full build.
    // otherwise, only fade in the text
    if (initialTimelineProgress === 0) {
      gsap.set(this.titleSelector, { autoAlpha: 1 });
      gsap.set(this.subtitleSelector, { autoAlpha: 1 });
      // tl.
      tl.from(this.titleSplit.chars, {
        x: 50,
        autoAlpha: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
      }).from(
        this.subtitleSplit.chars,
        {
          x: -50,
          autoAlpha: 0,
          duration: 1,
          ease: 'power1.inOut',
          stagger: 0.035,
          reversed: true,
        },
        '<+.25'
      );
    } else {
      tl.to(this.titleSelector, {
        autoAlpha: 1,
        duration: .25,
        ease: 'power1.inOut',
      });
      tl.to(
        this.subtitleSelector,
        { autoAlpha: 1, duration: .25, ease: 'power1.inOut' },
        '<'
      );
    }

    tl.resume();
  }
}
