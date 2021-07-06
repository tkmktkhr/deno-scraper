export class Station {
  constructor(readonly name: string, readonly withinMinutesOnFoot: number) {
    this.name = name;
    this.withinMinutesOnFoot = withinMinutesOnFoot;
  }
}
