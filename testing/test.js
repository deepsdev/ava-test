import test from 'ava';
import { demo } from './src/demo-module';
test('can add numbers', t => {
    t.is(1 + 1, 2);
});
test('can import from demo module', t => {
    const expected = 'Hello, from demo module.';
 
    const result = demo();
 
    t.is(result, expected);
});