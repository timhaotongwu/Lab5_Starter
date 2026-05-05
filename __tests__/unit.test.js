// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('valid email simple', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('valid email short domain', () => {
  expect(isEmail('tim@ucsd.edu')).toBe(true);
});

test('invalid email with dot in username', () => {
  expect(isEmail('haotong.wu@ucsd.edu')).toBe(false);
});

test('invalid email without domain', () => {
  expect(isEmail('student@')).toBe(false);
});

test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('Password1')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('A_test123')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('invalid password with symbol', () => {
  expect(isStrongPassword('StrongPass1!')).toBe(false);
});

test('valid date with slashes', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('valid date with one digit month and day', () => {
  expect(isDate('1/5/2026')).toBe(true);
});

test('invalid date with dashes', () => {
  expect(isDate('2026-12-25')).toBe(false);
});

test('invalid date with text', () => {
  expect(isDate('December 25')).toBe(false);
});

test('valid hex color lowercase with hash', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('valid hex color without hash', () => {
  expect(isHexColor('ffffff')).toBe(true);
});

test('invalid hex color too short', () => {
  expect(isHexColor('#ff')).toBe(false);
});

test('invalid hex color with non-hex character', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});