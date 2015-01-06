import { Command } from './out/commands/command';

export class Say extends Command {
  prepare() {
    console.log(this.parser.parse('sad sd as dsa '));
  }
}
