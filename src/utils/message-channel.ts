import bindthis from '@/decorators/bindthis';

export default class MessageChannel {
  private events: {
    [name: string]: Array<(...args: any[]) => any>;
  }

  constructor() {
    this.events = {};
  }

  @bindthis public publish(name: string, ...args: any[]) {
    if (this.events[name] === undefined)
      throw new Error(`event name ${name} does not exist`);
    this.events[name].forEach(l => l.apply(null, args));
  }

  @bindthis public subscribe(name: string, listener: (...args: any[]) => any) {
    if (this.events[name] === undefined) this.events[name] = [];
    this.events[name].push(listener);
    // console.log(this.events[name].length)
  }
  
  @bindthis public unsubscribe(name: string, listener: (...args: any[]) => any) {
    if (this.events[name] === undefined) return;
    const lIdx = this.events[name].findIndex(l => l === listener);
    this.events[name] = this.events[name].filter((_, idx: number) => idx !== lIdx);
    // console.log('unsubscribe')
  }
}