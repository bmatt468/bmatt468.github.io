import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { ScrollTriggerWorker } from '@components/landing/gsapify/animations/ScrollTriggerWorker.ts';
import { colors } from '@components/landing/gsapify/Colors.ts';
import { logger } from '@components/landing/gsapify/Logger.ts';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

export class HeroTimeline extends BoxBoundTimeline {
  private titleSplit: SplitText;
  private subtitleSplit: SplitText;
  private titleSelector: string = '#hero-title';
  private subtitleSelector: string = '#hero-subtitle';

  constructor() {
    super('heroTimeline', '#gsapBoxHero', 'bottom bottom', 'bottom -100px');

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
      const buildTl = gsap.getById('hero-build');
      if (buildTl && buildTl.isActive()) {
        buildTl.timeScale(10).seek(buildTl.duration());
      }
    };

    const worker = new ScrollTriggerWorker(this);
    const tl = worker.timeline;

    // logo fadeout
    tl.to(
      '#m, #b',
      {
        drawSVG: '50% 50% live',
        duration: 0.25,
        onStart: () => {
          logger.logProgressEvent(
            'hero logo',
            `start fade`,
            tl.progress()
          );
        },
        onComplete: () => {
          logger.logProgressEvent('hero logo', `end fade`, tl.progress());
        },
      },
      'start'
    );

    tl.to(
      '#m, #b',
      {
        autoAlpha: 0,
        duration: 0.25,
        onStart: () => {
          logger.logProgressEvent(
            'hero logo',
            `start fade`,
            tl.progress()
          );
        },
        onComplete: () => {
          logger.logProgressEvent('hero logo', `end fade`, tl.progress());
        },
      },
      'start'
    );

    // rocket movement
    tl.to(
      "[data-icon='space/rocketflame']",
      {
        keyframes: {
          xPercent: [0, 10, 0, -10],
          easeEach: 'none',
          duration: 0.25,
        },
        repeat: 1,
        yoyo: true,
      },
      'start'
    );

    // rocket flame color and movement
    tl.set(
      "[data-icon='space/rocketflame'] #flame",
      {
        transformBox: 'view-box',
        transformOrigin: 'center top',
      },
      'start'
    );

    tl.to(
      "[data-icon='space/rocketflame'] #flame",
      {
        keyframes: {
          rotation: [0, 5, -5, 5, -5],
          fill: [
            colors.get('amber-700'),
            colors.get('orange-700'),
            colors.get('amber-700'),
            colors.get('orange-700'),
            colors.get('amber-700'),
            colors.get('orange-700'),
          ],
        },
        repeat: 1,
        yoyo: true,
      },
      'start'
    );

    // explode subtitle
    tl.to(
      this.subtitleSplit.chars,
      {
        physics2D: {
          velocity: gsap.utils.distribute({
            base: 600,
            amount: 600,
            from: 'edges',
          }),
          angle: gsap.utils.distribute({
            base: -140,
            amount: 100,
            from: 'start',
          }),
        },
        stagger: {
          amount: 0.1,
          from: 'center',
        },
        duration: 0.1,
        autoAlpha: 0,
        onStart: () => {
          logger.logProgressEvent(
            'subtitle split',
            `start`,
            tl.progress(),
            true
          );
        },
        onComplete: () => {
          logger.logProgressEvent('subtitle split', `end`, tl.progress());
        },
      },
      '40%'
    );

    // explode title
    tl.to(
      this.titleSplit.chars,
      {
        physics2D: {
          velocity: gsap.utils.distribute({
            base: 600,
            amount: 600,
            from: 'edges',
          }),
          angle: gsap.utils.distribute({
            base: -140,
            amount: 100,
            from: 'start',
          }),
        },
        stagger: {
          amount: 0.1,
          from: 'center',
        },
        duration: 0.1,
        autoAlpha: 0,
        onStart: () => {
          logger.logProgressEvent('title split', `start`, tl.progress());
        },
        onComplete: () => {
          logger.logProgressEvent('title split', `end`, tl.progress());
        },
      },
      '40%+=.05'
    );

    // cleanup trails
    tl.set(
      "[data-icon='space/rockettrail-left-16_9']",
      {
        transformBox: 'view-box',
        transformOrigin: 'right top',
      },
      'start'
    );

    tl.set(
      "[data-icon='space/rockettrail-right-16_9']",
      {
        transformBox: 'view-box',
        transformOrigin: 'left top',
      },
      'start'
    );

    tl.to(
      "[data-icon='space/rockettrail-left-16_9']",
      {
        duration: 1,
        rotation: 20,
        ease: 'sine.inOut',
        onStart: () => {
          logger.logProgressEvent('left trail', `start`, tl.progress());
        },
        onComplete: () => {
          logger.logProgressEvent('left trail', `end`, tl.progress());
        },
      },
      'start'
    );

    tl.to(
      "[data-icon='space/rockettrail-right-16_9']",
      {
        duration: 1,
        rotation: -20,
        ease: 'sine.inOut',
        onStart: () => {
          logger.logProgressEvent('right trail', `start`, tl.progress());
        },
        onComplete: () => {
          logger.logProgressEvent('right trail', `end`, tl.progress());
        },
      },
      'start'
    );

    // final fades
    tl.set(
      '#hero-spacer',
      {
        margin: 0,
      },
      '90%'
    );

    tl.to(
      '.hero-final-fade',
      {
        autoAlpha: 0,
        duration: 0.1,
        ease: 'sine.inOut',
      },
      '90%'
    );

    this.timeline.add(tl);
  }

  animateText(): void {
    gsap.registerPlugin(DrawSVGPlugin);

    const initialTimelineProgress = this.timeline.scrollTrigger?.progress ?? -1;

    const tl = gsap.timeline({
      id: 'hero-build',
      paused: true,
      autoRemoveChildren: true,
    });

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
