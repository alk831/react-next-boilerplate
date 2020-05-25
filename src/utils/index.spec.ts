import { csx } from './csx';

describe('Utils 🧰', () => {
  describe('csx()', () => {
    it('should join class names properly', () => {
      const classNamesMock = {
        container: 'container',
        item: 'item',
      };

      const joinedClassNames = csx({
        [classNamesMock.container]: true,
        [classNamesMock.item]: false,
      });

      expect(joinedClassNames).toContain(classNamesMock.container);
      expect(joinedClassNames).not.toContain(classNamesMock.item);
    });
  });
});