let gamenum = 25;

let usernum = prompt("Enter your guessing number here : ");
while(usernum!=gamenum){
    usernum=prompt("You guessed the wrong number , Please try again : ");
}

console.log("Conguratulations , You guessed the right number.")