// One Very Important User(VIU) has a Very Confidential Document(VCD) stored on his
// Dropbox account.He doesn't let anyone see the VCD, especially his roommates who
// often have access to his devices.

// Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode.
// To ensure the confidentiality of the stored information, the device is locked out
// of Dropbox after 10 consecutive failed passcode attempts. We need to implement a
// function that, given an array of attempts made throughout the day and the correct
// passcode, checks to see if the device should be locked, i.e. 10 or more consecutive
// failed passcode attempts were made.

// passcode = "1111" and

// attempts = ["1111", "4444",
//   "9999", "3333",
//   "8888", "2222",
//   "7777", "0000",
//   "6666", "7285",
//   "5555", "1111"]

// output = true; (lock out)

function solution(passcode, attempts) {
  let failedCount = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === passcode && failedCount < 10) {
      failedCount = 0;
    } else {
      failedCount++;
    }
  }
  if (failedCount >= 10) {
    return true;
  } else {
    return false;
  }
}
solution('1111', ['1111', '4444',
  '9999', '3333',
  '8888', '2222',
  '7777', '0000',
  '6666', '7285',
  '5555', '1111']);
