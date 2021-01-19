'use strict';
const age = 16;
if(age>=18){
    console.log('wow! You are qulified to take a driving license');
} else{
    const timeleft = 18 - age;
    console.log(`Oops! You are not yet  qualified for a driving license wait for atleast ${timeleft} years.`);

}
// function declcaration
function YourAge(birthYear){
    const currentAge = 2021 - birthYear;
    return currentAge;
}
console.log(YourAge(1984));
//function expresssion
const timeleft = function(birthYear,firstName) {
    const currentAge = 2021 -birthYear;
    const retire = 65 - currentAge;
    return retire;
}
const ageinYears = timeleft(2000,'helih');
console.log(`Hi ${firstName}, you have ${ageinYears} until retirement`);
