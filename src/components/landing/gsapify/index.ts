import { animations } from '@components/landing/gsapify/animations';
import { background } from '@components/landing/gsapify/Background.ts';
import { logger } from '@components/landing/gsapify/Logger.ts';
import { getScrollSmoother } from '@components/landing/gsapify/ScrollSmoother.ts';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { initNavigation } from './Navigation.ts';

function launch(): void {
  // create all the timelines
  let heroTimeline = new animations.HeroTimeline();
  let resumeTimeline = new animations.ResumeTimeline();
  let aboutTimeline = new animations.AboutTimeline();
  let skillsTimeline = new animations.SkillsTimeline();
  let experienceTimeline = new animations.ExperienceTimeline();
  let projectsTimeline = new animations.ProjectsTimeline();
  let contactTimeline = new animations.ContactTimeline();

  // add animations to the navigation bar
  resumeTimeline.registerNavigationAnimation('#progressLinkResume');
  aboutTimeline.registerNavigationAnimation('#progressLinkAbout');
  skillsTimeline.registerNavigationAnimation('#progressLinkSkills');
  experienceTimeline.registerNavigationAnimation('#progressLinkExperience');
  projectsTimeline.registerNavigationAnimation('#progressLinkProjects');
  contactTimeline.registerNavigationAnimation('#progressLinkContact');

  // register animations
  heroTimeline.init();
  resumeTimeline.init();
  aboutTimeline.init();
  skillsTimeline.init();
  experienceTimeline.init();
  projectsTimeline.init();
  contactTimeline.init();
}

/**
 * Initialize the GSAP implementation.
 * - register the plugins we need to use across the gsap implementation
 * - ensure that ScrollSmoother is initialized
 * - set the base background color to avoid splash of white
 */
async function init(): Promise<void> {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
  getScrollSmoother();
  background.setColor('oklch(0.757 0.016 235.458)');
  initNavigation();
}

export const gsapify = {
  init,
  launch,
  logger,
};
