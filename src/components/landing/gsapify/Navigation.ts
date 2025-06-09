import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

enum NavigationStatus {
  NotStarted,
  InProgress,
  Complete,
}

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

function processNavigation(forward: boolean = true): void {
  const sections = document.querySelectorAll('.landing-box');
  let priorTop: number | null = null;
  let nextTop: number | null = null;
  let priorEl = null;
  let nextEl = null;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    console.log(top);

    if (Math.round(top) < 0 && (priorTop === null || top > priorTop)) {
      priorTop = top;
      priorEl = section;
    }

    if (Math.round(top) > 0 && (nextTop === null || top < nextTop)) {
      nextTop = top;
      nextEl = section;
    }
  });

  const smoother = getScrollSmoother();

  if ((forward && nextEl) || (!forward && priorEl)) {
    const el = forward ? nextEl : priorEl;

    smoother.scrollTo(el, true);
  }
}

function processBackNavigation(): void {
  processNavigation(false);
}

function processForwardNavigation(): void {
  processNavigation();
}

export {
  init as initNavigation,
  processForwardNavigation,
  processBackNavigation,
  NavigationStatus,
};
