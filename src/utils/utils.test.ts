import { upperCaseFirstLetter } from './utils';

test('running test to test upperCaseFirstLetter', () => {
  expect(upperCaseFirstLetter('hello')).toBe('Hello');
});
