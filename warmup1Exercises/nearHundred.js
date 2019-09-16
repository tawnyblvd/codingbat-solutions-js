//Given an int n, return true if it is within 10 of 100 or 200.
//Note: Math.abs(num) computes the absolute value of a number.

function nearHundred(n){
  if (Math.abs(100-n) <= 10) {
    return true;
  } else if (Math.abs(200-n) <= 10) {
    return true;
  } else {
    return false;
  }
}
