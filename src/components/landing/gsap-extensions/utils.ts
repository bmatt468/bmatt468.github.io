import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function boostrapGsapExtensions(): void {
  if (
    !gsap.core.Timeline.prototype.hasOwnProperty(
      'registerProgressItemOnTimeline'
    )
  ) {
    gsap.core.Timeline.prototype.registerProgressItemOnTimeline = function (
      target: string
    ): GSAPTimeline {
      return this.to(target, {
        '--scaleBackground': 1,
        duration: 1,
      });
    };
  }
}

export function registerBoxTimeline(
  gsapBoxId: string,
  start: string = 'top bottom',
  end: string = 'top top'
): GSAPTimeline {
  if (gsapBoxId[0] !== '#') {
    gsapBoxId = '#' + gsapBoxId;
  }

  return gsap.timeline({
    scrollTrigger: {
      trigger: gsapBoxId,
      start: start,
      end: end,
      scrub: true,
      markers: true,
      onEnter: () => console.log(`[${gsapBoxId}] Entered viewport`),
      onLeave: () => console.log(`[${gsapBoxId}] Reached top`),
      onEnterBack: () => console.log(`[${gsapBoxId}] Re-entered from below`),
      onLeaveBack: () => console.log(`[${gsapBoxId}] Left viewport downward`),
    },
  });
}

export function smootherSingleton(): ScrollSmoother {
  const smoother = ScrollSmoother.get();

  if (!smoother) {
    return ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }

  return smoother;
}

export function registerNavigationLinks(): void {
  const smoother = smootherSingleton();

  document
    .querySelectorAll<HTMLAnchorElement>('a.progress-link-anchor')
    .forEach((a) => {
      a.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
        }

        gsap.to(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset(a.hash, 'top')
          ),
          duration: 1.25,
          ease: 'power1.inOut',
        });
      });
    });
}
