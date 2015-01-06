import { Provide } from 'di';

@Provide(Parser)
export class Parser {
  constructor() {
    this.delimiter = /\s/;
  }

  parse(str) {
    let segments = str.split(this.delimiter);
    return { command: segments.shift(), args: segments };
  }
}
