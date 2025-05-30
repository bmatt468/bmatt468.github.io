import { animations } from '@components/landing/gsapify/animations';
import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import * as heroAnimations from './heroAnimations';
import { initNavigation } from './Navigation.ts';
import * as navBar from './Navigation.ts';

function launch(): void {
  // bootstrap what we need to get moving
  init();
  initNavigation();

  // create all the timelines
  let resumeTimeline = new animations.ResumeTimeline();
  let aboutTimeline = new animations.AboutTimeline();
  let skillsTimeline = new animations.SkillsTimeline();
  let experienceTimeline = new animations.ExperienceTimeline();
  let projectsTimeline = new animations.ProjectsTimeline();
  let contactTimeline = new animations.ContactTimeline();
}

/**
 * Initialize the GSAP implementation.
 * - register the plugins we need to use across the gsap implementation
 * - ensure that ScrollSmoother is initialized
 * - set the base background color to avoid splash of white
 */
function init(): void {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  getScrollSmoother();
  gsap.set(background, {
    backgroundColor: 'rgb(240, 171, 252)', // Tailwind's bg-fuchsia-300
  });
}

export const background = document.querySelector('#landing-background');

export const gsapify = {
  launch,
};
