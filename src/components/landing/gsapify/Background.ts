import { gsap } from 'gsap';

class Background {
  public readonly elem: Element;
  public readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
    let elem = document.querySelector(selector);

    if (!elem) {
      throw new Error(`Element ${selector} not found`);
    }

    this.elem = elem;
  }

  setColor(color: string) {
    gsap.set(this.elem, {
      backgroundColor: color, // Tailwind's bg-fuchsia-300
    });
  }
}

export const background = new Background('#landing-background');
