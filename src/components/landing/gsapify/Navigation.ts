import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {timelineRegistry} from "@components/landing/gsapify/animations/TimelineRegistry.ts";
import {BoxBoundTimeline} from "@components/landing/gsapify/animations/BoxBoundTimeline.ts";
import {maximum} from "zod/v4-mini";

enum NavigationStatus {
  NotStarted,
  InProgress,
  Complete,
}

interface SectionNavigation {
  prior: string;
  next: string;
}

const sectionOrder = [
  'hero',
  'resume',
  'about',
  'skills',
  'experience',
  'projects',
  'contact',
];

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

function getNavigation(): SectionNavigation {
  let lastStatus: NavigationStatus | null = null;

  for (const section of sectionOrder) {
    const tl = timelineRegistry.get(`${section}Timeline`);

    if (tl instanceof BoxBoundTimeline) {
      let nav: SectionNavigation = {
        prior: '',
        next: '',
      };

      const index = sectionOrder.indexOf(section);
      const status = tl.getNavigationStatus();

      if (index === 0) {
        nav.next = `#${sectionOrder[index+1]}`;
        nav.prior = `#`;
      } else if (index === sectionOrder.length - 1) {
        nav.next = `#${sectionOrder[index]}`;
        nav.prior = `#${sectionOrder[index-1]}`;
      } else {
        nav.next = `#${sectionOrder[index+1]}`;
        nav.prior = `#${sectionOrder[index-1]}`;
      }

      if (index === 0 && status === NavigationStatus.NotStarted
        || (index === sectionOrder.length - 1 && status === NavigationStatus.Complete)
        || (status === NavigationStatus.InProgress)) {
        return nav;
      } else if (lastStatus === NavigationStatus.Complete && status === NavigationStatus.NotStarted) {
        console.log(section, status);
        console.log(lastStatus);
      } else {
        console.log(section, status);
        console.log(lastStatus);

        lastStatus = status;
      }
    }
  }

  throw new Error(`active section not found`);
}

function processNavigation(forward: boolean = true): void {
  const sections = document.querySelectorAll('.landing-box');
  let priorTop: number|null = null;
  let nextTop: number|null = null;
  let priorEl = null;
  let nextEl = null;

  sections.forEach(section => {
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

  console.log(priorEl);
  console.log(nextEl);

  // const navigation = forward ? getNavigation().next : getNavigation().prior;
  const smoother = getScrollSmoother();

  if ((forward && nextEl) || (!forward && priorEl) ) {
    const el = forward ? nextEl : priorEl;

    smoother.scrollTo(el);
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
