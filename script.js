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

//ominous message

let scaryMessageNum=(Math.floor(Math.random()*10));
let ominousMessage="";
switch (scaryMessageNum) {
    case 0:
        ominousMessage="The danger is still present, in your time, as it was in ours.";
        break;
    case 1:
        ominousMessage="Any noise may act as an attraction. Be careful.";
        break;
    case 2:
        ominousMessage="Running won't work. Fighting won't work. Begging won't work. Hiding may.";
        break;
    case 3:
        ominousMessage="Never trust familiar voices.";
        break;
    case 4:
        ominousMessage="Beware of decoys. Don't get yourself lured out.";
        break;
    case 5:
        ominousMessage="You've seen it. Now he can hear you. You've touched it. Now he can see you. Never ring it. If you hear it, he can touch you.";
        break;
    case 6:
        ominousMessage="Barricades are an attraction as they point out where you hide.";
        break;
    case 7:
        ominousMessage="Do Not Enter. Death will follow.";
        break;
    case 8:
        ominousMessage="Hush now! The subject spies on us!";
        break;
    case 9:
        ominousMessage="Those who touch your food can reach inside your body.";
        break;

    default:
        ominousMessage="Invalid ominous message"
        break;
}   

console.log(`The spirits have gathered to share this important message with you:`);
console.log(ominousMessage);

