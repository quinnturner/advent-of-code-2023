import { describe, expect, it } from 'bun:test';
import day1 from './day-1.js';

describe('day1', () => {
  it('should return the correct sum for a single line document', () => {
    const document = '1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet';
    const expectedSum = 142;
    expect(day1(document)).toEqual(expectedSum);
  });

  it('should return the correct sum for a multi-line document', () => {
    const document = 'abc123def\nxyz456uvw\n123abc789';
    expect(day1(document)).toEqual(13 + 46 + 19);
  });

  it('should return 0 for an empty document', () => {
    const document = '';
    const expectedSum = 0;
    expect(day1(document)).toEqual(expectedSum);
  });
});