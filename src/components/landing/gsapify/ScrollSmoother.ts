import { ScrollSmoother } from 'gsap/ScrollSmoother';

function get(): ScrollSmoother {
  const smoother = ScrollSmoother.get();

  if (!smoother) {
    return ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });
  }

  return smoother;
}

function check(): boolean {
  return ScrollSmoother.get() !== undefined;
}

export { get as getScrollSmoother, check as checkScrollSmoother };
