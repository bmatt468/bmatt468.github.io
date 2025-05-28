import { gsap } from 'gsap';

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
