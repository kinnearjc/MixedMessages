console.log("The following is your horoscope:");

//Lucky sign
let randomSignNum = Math.floor(Math.random() * 10);
let sign = "";

switch (randomSignNum) {
    case 0:
        sign = "Dog";
        break;
    case 1:
        sign = "Cat";
        break;
    case 2:
        sign = "Goat";
        break;
    case 3:
        sign = "Eagle";
        break;
    case 4:
        sign = "Cockroach";
        break;
    case 5:
        sign = "Fish";
        break;
    case 6:
        sign = "Fly";
        break;
    case 7:
        sign = "Cow";
        break;
    case 8:
        sign = "Snake";
        break;
    case 9:
        sign = "Pigeon";
        break;
    default:
        sign = "Invalid sign";
        break;

}
console.log(`The mystical sign that embodies you is a ${sign}.`);


//Lucky Number
let luckyNumber=Math.floor(Math.random()*100)+1;

console.log(`Your lucky number is ${luckyNumber}`);

//Avoid color

let badLuckColor=(Math.floor(Math.random()*6));
let avoidThis="";
switch (badLuckColor) {
    case 0:
        avoidThis="Red";
        break;
    case 1:
        avoidThis="Blue";
        break;
    case 2:
        avoidThis="Yellow";
        break;
    case 3:
        avoidThis="Purple";
        break;
    case 4:
        avoidThis="Green";
        break;
    case 5:
        avoidThis="Orange";
        break;
    default:
        avoidThis="Invalid bad luck color"
        break;
}   

console.log(`This month you should try in earnest to avoid the color ${avoidThis}.`);

