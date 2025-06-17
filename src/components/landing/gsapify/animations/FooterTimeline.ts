import { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';
import { ScrollTriggerWorker } from '@components/landing/gsapify/animations/ScrollTriggerWorker.ts';

export class FooterTimeline extends BoxBoundTimeline {
  private readonly logoSelector = '#landing-footer-logo';
  private readonly bSide = '#landing-footer-b';
  private readonly mSide = '#landing-footer-m';

  constructor() {
    super('footerTimeline', '#landing-footer', {
      markers: true,
      start: 'top bottom',
      end: 'bottom bottom',
    });
  }

  init(): void {
    const worker = new ScrollTriggerWorker(this, true);
    const tl = worker.timeline;
    const everything = `${this.logoSelector}, ${this.bSide}, ${this.mSide}`;
    const paths = `${this.bSide}, ${this.mSide}`;

    tl.set(
      everything,
      {
        autoAlpha: 1,
      },
      'start'
    );

    tl.set(
      paths,
      {
        drawSVG: '50% 50%',
      },
      'start'
    );

    tl.to(
      paths,
      {
        drawSVG: '0% 100%',
        ease: 'sine.inOut',
        duration: 0.95,
      },
      'start'
    );

    this.timeline.add(tl);
  }
}
