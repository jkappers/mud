import { Injector } from 'di';
import { Interpreter } from './commands/interpreter';

var injector    = new Injector([]);
var interpreter = injector.get(Interpreter);
interpreter.command('say whateber I want to say');
