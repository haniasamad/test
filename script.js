var score =0;
var question1 = prompt("Which Fruits seed is on the OutSide?")
var answer1 = "strawbarry"
// alert("correct")

if(question1 === answer1){
score ++
}

var question2 = prompt("What is the full name of M?")
var answer2 = "mars"
// alert("correct")

if(question2 === answer2){
score ++
}

var question3 = prompt("What is main ingredient in Ice Cream?")
var answer3 = "milk"
// alert("correct")

if(question3 === answer3){
score ++
}

var question4 = prompt("What fruit is known as the 'King of fruit'?")
var answer4 = "mango"

if(question4 === answer4){
score ++
}

else{ 
    alert("Loser👎👎")
    }
alert("your score is" + score)