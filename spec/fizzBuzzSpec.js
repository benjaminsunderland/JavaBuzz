describe('Javabuzz', function() {

  var javabuzz

  describe('knows when a number is', function() {

    it('divisible by 3', function () {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(3)).toBe(true);
    });

    it('returns false when given any other number than 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(4)).toBe(false);

    });

    it('divisible by 5', function () {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByFive(5)).toBe(true)

    });


    it('returns false when given any other number than 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(7)).toBe(false);

    });

    it('is divisible by three and five', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThreeAndFive(15)).toBe(true);

    });

    it('returns true when passed a number and divisor and returns true', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleBy(15, 3)).toBe(true);
    });
  });
});
