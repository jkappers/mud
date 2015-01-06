import { Inject } from 'di';
import { Parser } from './parser';

var System = require('es6-module-loader').System;

@Inject(Parser)
export class Interpreter {
  constructor(parser, injector) {
    this.parser = parser;
  }

  command(input) {
    let instance = this;
    let parsed = instance.parser.parse(input);
    return System.import(`out/commands/${parsed.command}`).then(function(module){
      console.log(module);
    }).catch(function(err){
      console.log('err', err);
    });
  }
}
