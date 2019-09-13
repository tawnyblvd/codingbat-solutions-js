//You are driving a little too fast, and a police officer stops you. Write code to
//compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
//If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1.
//If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed
//can be 5 higher in all cases.

function caughtSpeeding(speed, isBirthday){
  let noTicket = 0;
  let smallTicket = 1;
  let bigTicket = 2;
  if ((speed <= 65) && isBirthday) {
    return noTicket;
  } else if ((speed > 65) && (speed <= 85) && isBirthday) {
    return smallTicket;
  } else if ((speed > 85) && isBirthday) {
    return bigTicket;
  } else if ((speed <= 60) && !isBirthday) {
    return noTicket;
  } else if ((speed > 60) && (speed <= 80) && (!isBirthday)) {
    return smallTicket;
  } else if ((speed >= 81) && !isBirthday) {
    return bigTicket;
  }
}

// console.log(caughtSpeeding(65, true));
