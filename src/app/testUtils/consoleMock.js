export class ConsoleMock {
  constructor() {
    this.log = console.log;
    this.warning = console.warning;
    this.error = console.error;

    console.log = jest.fn(this.log);
    console.warning = jest.fn();
    console.error = jest.fn();
  }

  destroy() {
    console.log = this.log;
    console.warning = this.warning;
    console.error = this.error;
  }
}
