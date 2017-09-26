function Javabuzz() {


};

Javabuzz.prototype.isDivisbleByThree = function(number) {
  if (number == 3) {
   return true
 } else {
   return false
 }
};

Javabuzz.prototype.isDivisbleByFive = function(number) {
  if (number == 5) {
   return true
 } else {
   return false
 }
};

Javabuzz.prototype.isDivisbleByThreeAndFive = function(number) {

  if (number % 3 == 0 && number % 5 == 0) {
    return true
  } else {
    return false
  }
};



Javabuzz.prototype.isDivisbleBy = function(number, divisor) {

  if (number % divisor == 0) {
    return true
  } else {
    return false
  }
};

var javabuzz = new Javabuzz();
