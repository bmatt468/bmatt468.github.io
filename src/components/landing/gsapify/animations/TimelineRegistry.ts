import { BaseTimeline } from './BaseTimeline';

class TimelineRegistry {
  private timelines = new Map<string, BaseTimeline>();

  register(timeline: BaseTimeline): void {
    this.timelines.set(timeline.id, timeline);
  }

  get<T extends BaseTimeline>(id: string): T | undefined {
    return this.timelines.get(id) as T | undefined;
  }

  getAll(): Map<string, BaseTimeline> {
    return this.timelines;
  }
}

export const timelineRegistry = new TimelineRegistry();
