import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function init() {
  gsap.set('.progress-link', {
    '--scaleBackground': 0,
  });

  const smoother = getScrollSmoother();

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

export { init as initNavigation };
