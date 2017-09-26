describe('Javabuzz', function() {

  var javabuzz

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function () {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('returns false when given any other number than 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);

    });

    it('divisible by 5', function () {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)

    });

    it('returns false when given any other number than 5', function() {
      expect(javabuzz.isDivisibleByThree(7)).toBe(false);

    });

    it('divisble by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });

    it('returns false when given any other number than 15', function() {
      expect(javabuzz.isDivisibleByFifteen(14)).toBe(false);
    });

    describe('when playing, says', function() {

      it('"fizz", when a number is divisible by 15', function() {
        expect(javabuzz.says(15)).toBe("fizzbuzz")
      });
      it('"fizz", when a number is divisible by 5', function() {
        expect(javabuzz.says(5)).toBe("buzz")
      });
      it('"fizz", when a number is divisible by 3', function() {
        expect(javabuzz.says(3)).toBe("fizz")
      });
    });
  });
});
