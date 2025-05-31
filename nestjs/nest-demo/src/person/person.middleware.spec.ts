import { PersonMiddleware } from './person.middleware';

describe('PersonMiddleware', () => {
  it('should be defined', () => {
    expect(new PersonMiddleware()).toBeDefined();
  });
});
