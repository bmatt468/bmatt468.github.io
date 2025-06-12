import type { HeroTimeline } from '@components/landing/gsapify/animations/HeroTimeline.ts';

import { animations } from '@components/landing/gsapify/animations';
import { timelineRegistry } from '@components/landing/gsapify/animations/TimelineRegistry.ts';
import { background } from '@components/landing/gsapify/Background.ts';
import { logger } from '@components/landing/gsapify/Logger.ts';
import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';
import { PhysicsPropsPlugin } from 'gsap/PhysicsPropsPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import {
  initNavigation,
  processBackNavigation,
  processForwardNavigation,
} from './Navigation.ts';

function launch(): void {
  // run the hero animations
  const heroTimeline: HeroTimeline = timelineRegistry.get('heroTimeline');
  heroTimeline.animateText();
}

function initTimelines(): void {
  // create all the timelines
  const heroTimeline = new animations.HeroTimeline();
  const resumeTimeline = new animations.ResumeTimeline();
  const aboutTimeline = new animations.AboutTimeline();
  const skillsTimeline = new animations.SkillsTimeline();
  const experienceTimeline = new animations.ExperienceTimeline();
  const projectsTimeline = new animations.ProjectsTimeline();
  const contactTimeline = new animations.ContactTimeline();

  // add animations to the navigation bar
  // resumeTimeline.registerNavigationAnimation('#progressLinkResume');
  // aboutTimeline.registerNavigationAnimation('#progressLinkAbout');
  // skillsTimeline.registerNavigationAnimation('#progressLinkSkills');
  // experienceTimeline.registerNavigationAnimation('#progressLinkExperience');
  // projectsTimeline.registerNavigationAnimation('#progressLinkProjects');
  // contactTimeline.registerNavigationAnimation('#progressLinkContact');

  // register animations
  heroTimeline.init();
  resumeTimeline.init();
  aboutTimeline.init();
  skillsTimeline.init();
  experienceTimeline.init();
  projectsTimeline.init();
  contactTimeline.init();
}

function bindKeyHandlers(): void {
  // TODO: Revisit
  // window.addEventListener('keydown', (event: KeyboardEvent) => {
  //   switch (event.key) {
  //     case 'ArrowUp':
  //     case 'ArrowLeft':
  //       event.preventDefault();
  //       processBackNavigation();
  //       break;
  //
  //     case 'ArrowDown':
  //     case 'ArrowRight':
  //       event.preventDefault();
  //       processForwardNavigation();
  //       break;
  //   }
  // });
}

/**
 * Initialize the GSAP implementation.
 * - register the plugins we need to use across the gsap implementation
 * - ensure that ScrollSmoother is initialized
 * - set the base background color to avoid splash of white
 * - bind the navigation helpers
 * - create all the timelines to prevent FOUC
 */
async function init(): Promise<void> {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    DrawSVGPlugin,
    PhysicsPropsPlugin,
    Physics2DPlugin
  );
  getScrollSmoother();
  background.setColor('oklch(0.757 0.016 235.458)');
  // initNavigation();
  initTimelines();
  // bindKeyHandlers();
}

export const gsapify = {
  init,
  launch,
  logger,
};
