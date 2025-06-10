import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
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

  init() {
    this.timeline.vars.onStart = () => {
      gsap.getById('hero-build')?.timeScale(10);
    };

    this.timeline.to(
      '#m',
      {
        drawSVG: '50% 50%',
        autoAlpha: 0,
        duration: 0.25,
      },
      -1
    );

    this.timeline.to(
      '#b',
      {
        drawSVG: '50% 50%',
        autoAlpha: 0,
        duration: 0.25,
      },
      -1
    );

    this.timeline.to(
      "[data-icon='space/rocketflame']",
      {
        x: 5,
        duration: 1.25,
        repeat: 10,
        yoyo: true,
      },
      '<'
    );
  }

  animateText(): void {
    gsap.registerPlugin(DrawSVGPlugin);

    const initialTimelineProgress = this.timeline.scrollTrigger?.progress ?? -1;

    const tl = gsap.timeline({ id: 'hero-build', paused: true });

    // if the position is 0, then the timeline is at the top of the page and should do full build.
    // otherwise, only fade in the text
    if (initialTimelineProgress === 0) {
      gsap.set(this.titleSelector, { autoAlpha: 1 });
      gsap.set(this.subtitleSelector, { autoAlpha: 1 });
      gsap.set('#hero-logo', { autoAlpha: 1 });

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

      tl.fromTo(
        '#m',
        {
          drawSVG: '50% 50%',
        },
        {
          duration: 2,
          drawSVG: '0% 100%',
          ease: 'sine.inOut',
        },
        '<'
      );

      tl.fromTo(
        '#b',
        {
          drawSVG: '50% 50%',
        },
        {
          duration: 2,
          drawSVG: '0% 100%',
          ease: 'sine.inOut',
        },
        '<'
      );
    } else {
      tl.to(this.titleSelector, {
        autoAlpha: 1,
        duration: 0.25,
        ease: 'power1.inOut',
      });
      tl.to(
        this.subtitleSelector,
        { autoAlpha: 1, duration: 0.25, ease: 'power1.inOut' },
        '<'
      );
      tl.to(
        '#hero-logo',
        { autoAlpha: 1, duration: 0.25, ease: 'power1.inOut' },
        '<'
      );
    }

    tl.resume();
  }
}
