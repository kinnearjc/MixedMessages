console.log("The following is your horoscope:");
let randomSignNum = Math.floor(Math.random() * 10);
//console.log(randomSignNum);

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

let luckyNumber=Math.floor(Math.random()*100)+1;

console.log(`Your lucky number is ${luckyNumber}`);
