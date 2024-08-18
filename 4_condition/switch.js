const expr = prompt("enter your fav fruit")
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

let age=prompt("enter yor age")
console.log(age<18?"child":"adult")