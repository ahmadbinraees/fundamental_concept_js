/*------------------------------ mobile buying decision ---------------------------- */

var samPrice = 500;
var nokPrice = 400;
var miPrice = 300;
var sonyPrice = 600;
var applePrice = 2000;
var symPrice = 200;

var haveMoney = 1000;
var ultraMoney = 10000;

haveMoney = 2;
ultraMoney = 2

if (samPrice <= haveMoney && haveMoney > ultraMoney) {
    getSam = "I will buy samsung";
    console.log(getSam);
}
else if (nokPrice <= haveMoney) {
    getNok = "I will buy Nokia";
    console.log(getNok);
}
else if (miPrice <= haveMoney) {
    getMi = "I will buy Realme";
    console.log(getMi);
}
else if (sonyPrice <= haveMoney) {
    getSony = "I will buy Sony";
    console.log(getSony);
}
else if (applePrice <= haveMoney || haveMoney < ultraMoney) {
    getIphone = "I will buy Iphone 13";
    console.log(getIphone);
}
else if (symPrice <= haveMoney) {
    getSym = "I will buy Symphony";
    console.log(getSym);
}
else {
    happyWith = "I am happy with My Calculator";
    console.log(happyWith);
}