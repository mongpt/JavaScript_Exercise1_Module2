
//1
var numList = [];
for (i=1; i<6; i++) {
  numList[i-1] = parseInt(prompt("Input number "+i+": "));
}
for (i=4; i>=0;i--) {
  console.log(numList[i]);
}

//2
var nameList = [];
var numPeople = parseInt(prompt("How many participants? "));
for (i=1; i<= numPeople; i++) {
  nameList[i-1] = prompt("What is name of participant"+i+": ");
}

for (i in nameList) {
  document.getElementById("ol").innerHTML += '<li>'+nameList[i]+'</li>';
}

//3
var dogList = [];
for (i=1;i<7;i++) {
  dogList.push(prompt("Input name of dog"+i+": "));
}
dogList.sort().reverse();
for (i=0;i<6;i++) {
  document.getElementById("module2-3").innerHTML += '<li>'+dogList[i]+'</li>';
}

//4
var numList = [];
var num = parseInt(prompt("Input a number or 0 to stop: "));
numList.push(num);
while (num !==0) {
  num = parseInt(prompt("Input a number or 0 to stop: "));
  numList.push(num);
}
numList.sort();
numList.reverse();
console.log(numList);

//5
function checkExistence(num, num_arr) {
    for (let i = 0; i < num_arr.length; i++) {
        if (num === num_arr[i]) {
            return true;
        }
    }

    return false;
}

var user_input;
var num_arr = [];

while (true) {
    user_input = parseInt(prompt("Input a number"));
    if (checkExistence(user_input, num_arr)) {
        alert("You have entered an existing number");
        break;
    }
    else {
        num_arr.push(user_input);
    }
}

num_arr.sort();
console.log(num_arr);

//6
function diceRoll6(){
  return Math.floor(Math.random() * 6) + 1;
}
var rolled = diceRoll6();
while (rolled != 6) {
  document.getElementById("ul26").innerHTML += '<li>'+rolled+'</li>';
  rolled = diceRoll6();
}
document.getElementById("ul26").innerHTML += '<li>'+rolled+'</li>';

//7
function diceRoll7(x){
  return Math.floor(Math.random() * x) + 1;
}
var diceSides = parseInt(prompt("Number of sides on a dice: "));
var rolled = diceRoll7(diceSides);
while (rolled != diceSides) {
  document.getElementById("ul27").innerHTML += '<li>'+rolled+'</li>';
  rolled = diceRoll7(diceSides);
}
document.getElementById("ul27").innerHTML += '<li>'+rolled+'</li>';

//8
function concat(str) {
  let string = "";
  for (x in str) {
    string += str[x];
  }
  return string;
}
var testStr = ["Hello", "There", "My", "Name", "Is", "Mong"];
document.getElementById("module2-8").innerHTML = concat(testStr);

//9
function even(arr) {
  var evenArr = [];
  for (x in arr) {
    if (arr[x] % 2 === 0) {
      evenArr.push(arr[x]);
    }
  }
  return evenArr;
}
var originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newEvenArr = even(originalArr);
console.log(originalArr);
console.log(newEvenArr);
