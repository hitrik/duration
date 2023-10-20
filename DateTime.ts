export namespace DT {
  /*
DateTime(int year, [int month = 1, int day = 1, int hour = 0, int minute = 0, int second = 0, int millisecond = 0, int microsecond = 0])
Constructs a DateTime instance specified in the local time zone.
*/
  export class DateTime {
    date: Date;

    constructor(
      protected readonly year: number,
      protected readonly month: number = 1,
      protected readonly day: number = 1,
      protected readonly hour: number = 0,
      protected readonly minute: number = 0,
      protected readonly second: number = 0,
      protected readonly millisecond: number = 0
    ) {
      this.date = new Date(
        this.year,
        this.month,
        this.day,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    }

    protected formatDateNow(ms: number) {
      const date = new Date(ms);

      const removedSymbolTArray = date.toISOString().slice(0, -1).split('T');

      return removedSymbolTArray.join(' ');
    }

    static now() {
      const n = Date.now();
    }
  }
}

const test = () => {
  console.log('start test');
  const date = new DT.DateTime(2022);
  console.log(date);
};

test();
