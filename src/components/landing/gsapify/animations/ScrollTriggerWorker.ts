import type { BoxBoundTimeline } from '@components/landing/gsapify/animations/BoxBoundTimeline.ts';

import { logger } from '@components/landing/gsapify/Logger.ts';
import { gsap } from 'gsap';

export enum WorkerLabelCategory {
  Fifths = 'Fifths',
  Tenths = 'Tenths',
  Quarters = 'Quarters',
  Halves = 'Halves',
}

export enum WorkerLabelStyle {
  Decimal = 'Decimal',
  Percentage = 'Percentage',
}

export class ScrollTriggerWorker {
  public readonly id: string;
  public readonly timeline: gsap.core.Timeline;
  public readonly parent: BoxBoundTimeline;
  public readonly style: WorkerLabelStyle;
  private labelStatus: Record<WorkerLabelCategory, boolean> = {
    Fifths: false,
    Tenths: false,
    Quarters: false,
    Halves: false,
  };

  constructor(
    parent: BoxBoundTimeline,
    baseCategory: WorkerLabelCategory = WorkerLabelCategory.Tenths,
    style: WorkerLabelStyle = WorkerLabelStyle.Percentage
  ) {
    this.id = `${parent.id}-worker`;
    this.parent = parent;
    this.style = style;

    this.timeline = gsap.timeline({
      id: this.id,
      duration: 1,
    });

    this.addWorkerLabel('start', 0);
    this.addWorkerLabel('end', 1);

    if (baseCategory === WorkerLabelCategory.Tenths) {
      this.addTenthsLabels();
    }
  }

  addFifthsLabels(): void {
    if (!this.labelStatus.Fifths) {
    }
  }

  addTenthsLabels(): void {
    if (!this.labelStatus.Tenths) {
      this.addWorkerLabel('0%', 0.1);
      this.addWorkerLabel('10%', 0.1);
      this.addWorkerLabel('20%', 0.2);
      this.addWorkerLabel('30%', 0.3);
      this.addWorkerLabel('40%', 0.4);
      this.addWorkerLabel('50%', 0.5);
      this.addWorkerLabel('60%', 0.6);
      this.addWorkerLabel('70%', 0.7);
      this.addWorkerLabel('80%', 0.8);
      this.addWorkerLabel('90%', 0.9);
      this.addWorkerLabel('100%', 1);
    }
  }

  addQuartersLabels(): void {
    if (!this.labelStatus.Quarters) {
    }
  }

  addHalvesLabels(): void {
    if (!this.labelStatus.Halves) {
    }
  }

  addWorkerLabel(label: string, position: number) {
    this.timeline.addLabel(label, position).call(
      () => {
        logger.logWorkerTimelineLabel(
          this.id,
          label,
          this.timeline.progress(),
          this.parent.id,
          this.parent.timeline.progress(),
          true
        );
      },
      undefined,
      label
    );
  }
}
