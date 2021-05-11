const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Wellington',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Wellington&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Wellington',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Wellington&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    //deep nested object
    const obj = {
      name: 'Wellington',
      abilities: {
        firt: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Wellington&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Wellington',
      profession: 'developer',
    });
  });

  it('should convert a query string of single key-value pair to object', () => {
    const qs = 'name=Wellington';

    expect(parse(qs)).toEqual({
      name: 'Wellington',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Wellington&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Wellington',
      abilities: ['JS', 'TDD'],
    });
  });
});
