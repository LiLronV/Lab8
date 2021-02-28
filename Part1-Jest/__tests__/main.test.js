const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon path', () => {
    test('volume greater than 66', () => {
      expect(formatVolumeIconPath(67)).toMatch('3');
      expect(formatVolumeIconPath(80)).toMatch('3');
      expect(formatVolumeIconPath(100)).toMatch('3');
    });

    test('volume greater than 33 and less than or equal to 66 ', () => {
        expect(formatVolumeIconPath(66)).toMatch('2');
        expect(formatVolumeIconPath(34)).toMatch('2');
        expect(formatVolumeIconPath(40)).toMatch('2');
      });

      test('volume greater than 1 and less than or equal to 33', () => {
        expect(formatVolumeIconPath(33)).toMatch('1');
        expect(formatVolumeIconPath(2)).toMatch('1');
      });

      test('volume 0 or less', () => {
        expect(formatVolumeIconPath(0)).toMatch('0');
        expect(formatVolumeIconPath(-20)).toMatch('0');
      });
  
  });