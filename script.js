'use strict';
// const age = 16;
// if(age>=18){
//     console.log('wow! You are qulified to take a driving license');
// } else{
//     const timeleft = 18 - age;
//     console.log(`Oops! You are not yet  qualified for a driving license wait for atleast ${timeleft} years.`);

// }
// // function declcaration
// function YourAge(birthYear){
//     const currentAge = 2021 - birthYear;
//     return currentAge;
// }
// console.log(YourAge(1984));
// //function expresssion
// const timeleft = function(birthYear,firstName) {
//     const currentAge = 2021 -birthYear;
//     const retire = 65 - currentAge;
//     return retire;
// }
// const ageinYears = timeleft(2000,'helih');
// console.log(`Hi ${firstName}, you have ${ageinYears} until retirement`);
document.querySelector('.btn-primary').addEventListener('click',console.log(document.querySelector('.table')));
const colorChanger = document.querySelectorAll('a');
colorChanger.style.color = 'red'
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  

  
  function setRandomColor() {
    colorInput = getRandomColor();
    colorChanger.style.color = colorInput;
  }
  setInterval("setRandomColor()",500);
