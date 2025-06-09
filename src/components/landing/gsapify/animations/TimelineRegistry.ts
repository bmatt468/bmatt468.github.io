import { BaseTimeline } from './BaseTimeline';

class TimelineRegistry {
  private timelines = new Map<string, BaseTimeline>();

  register(timeline: BaseTimeline, failsafe: boolean = true): void {
    if (failsafe && this.exists(timeline.id)) {
      throw new Error(`${timeline.id} already registered`);
    }

    this.timelines.set(timeline.id, timeline);
  }

  get<T extends BaseTimeline>(id: string): T {
    if (!this.exists(id)) {
      throw new Error(`${id} has not been registered`);
    }

    return this.timelines.get(id) as T;
  }

  unsafeGet<T extends BaseTimeline>(id: string): T | undefined {
    return this.timelines.get(id) as T | undefined;
  }

  exists(id: string): boolean {
    return this.timelines.has(id);
  }

  getAll(): Map<string, BaseTimeline> {
    return this.timelines;
  }
}

export const timelineRegistry = new TimelineRegistry();
