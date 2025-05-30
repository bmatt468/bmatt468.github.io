import { BaseTimeline } from '@components/landing/gsapify/animations/BaseTimeline.ts';
import { timelineRegistry } from '@components/landing/gsapify/animations/TimelineRegistry.ts';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export class HeroTimeline extends BaseTimeline {
  private titleSplit: SplitText;
  private subtitleSplit: SplitText;

  constructor() {
    let timeline = gsap.timeline({});
    super('heroTimeline', timeline);
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

    gsap.set(this.titleSplit.chars, { autoAlpha: 0 });
    // gsap.set(this.subtitleSplit.chars, { autoAlpha: 0 });
    gsap.set('#hero-title', { autoAlpha: 1 });
    gsap.set('#hero-subtitle', { autoAlpha: 1 });
  }

  init() {
    gsap.fromTo(
      this.titleSplit.chars,
      { x: 50 },
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

    gsap.to('#hero-subsubtitle', {
      autoAlpha: 1,
      delay: 2,
    });
  }

  // function registerHeroRevealAnimations(): void {
  //   // gsap.set('#hero-title', { autoAlpha: 0 });
  //   // gsap.set('#hero-subtitle', { autoAlpha: 0 });
  //   // gsap.set('#hero-links', { autoAlpha: 0 });
  //
  //   // SplitText.create('#hero-title', {
  //   //   type: 'chars',
  //   //   autoSplit: true,
  //   //   smartWrap: true,
  //   //   aria: 'auto',
  //   //   onSplit: (self) => {
  //   //     return gsap
  //   //       .timeline()
  //   //       .set('#hero-title', { autoAlpha: 1 })
  //   //       .from(self.chars, {
  //   //         x: 50,
  //   //         opacity: 0,
  //   //         duration: 1,
  //   //         ease: 'power1.inOut',
  //   //         stagger: 0.04,
  //   //       })
  //   //       .fromTo(
  //   //         '#hero-subtitle',
  //   //         { y: 15 },
  //   //         {
  //   //           y: 0,
  //   //           autoAlpha: 1,
  //   //           duration: 1,
  //   //           ease: 'power1.inOut',
  //   //           delay: -0.5,
  //   //         }
  //   //       )
  //   //       .fromTo(
  //   //         '#hero-links',
  //   //         { y: 15 },
  //   //         {
  //   //           y: 0,
  //   //           autoAlpha: 1,
  //   //           duration: 1,
  //   //           ease: 'power1.inOut',
  //   //           delay: -0.75,
  //   //         }
  //   //       );
  //   //   },
  //   // });
  //
  //   document.fonts.ready.then(() => {
  //     let split = SplitText.create('#hero-title', {
  //       type: 'chars',
  //       smartWrap: true,
  //       aria: 'auto',
  //     });
  //
  //     gsap.to(split.chars, { x: 100 });
  //   });
  // }

  // function registerHeroFadeAnimations(): void {
  //   // const timeline: gsap.core.Timeline | undefined = gsap.getById(
  //   //   '#gsapBoxResumeTimeline'
  //   // );
  //   //
  //   // if (timeline) {
  //   //   SplitText.create('#hero-title', {
  //   //     type: 'chars',
  //   //     smartWrap: true,
  //   //     aria: 'auto',
  //   //   });
  //   //
  //   //   timeline.to(
  //   //     '#hero-title',
  //   //     {
  //   //       autoAlpha: 0,
  //   //       duration: 0.25,
  //   //     },
  //   //     0
  //   //   );
  //   // }
  // }
}
