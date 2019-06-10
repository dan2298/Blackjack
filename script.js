//player cards
let player = [];
let p1 = []
//dealer cards
let dealer = [];
let d = []

//initialize scores to their numeric values 
let sA = [11, "sA"]; let hA = [11, "hA"]; 
let s2 = [2, "s2"]; let h2 = [2, "h2"];
let s3 = [3, "s3"]; let h3 = [3, "h3"];
let s4 = [4, "s4"]; let h4 = [4, "h4"];
let s5 = [5, "s5"]; let h5 = [5, "h5"]; 
let s6 = [6, "s6"]; let h6 = [6, "h6"]; 
let s7 = [7, "s7"]; let h7 = [7, "h7"]; 
let s8 = [8, "s8"]; let h8 = [8, "h8"]; 
let s9 = [9, "s9"]; let h9 = [9, "h9"]; 
let s10 = [10, "s10"]; let h10 = [10, "h10"];
let sJ = [10, "sJ"]; let hJ = [10, "hJ"]; 
let sQ = [10, "sQ"]; let hQ = [10, "hQ"]; 
let sK = [10, "sK"]; let hK = [10, "hK"];
let cA = [11, "cA"]; let dA = [11, "dA"];
let c2 = [2, "c2"]; let d2 = [2, "d2"];
let c3 = [3, "c3"]; let d3 = [3, "d3"];
let c4 = [4, "c4"]; let d4 = [4, "d4"];
let c5 = [5, "c5"]; let d5 = [5, "d5"];
let c6 = [6, "c6"]; let d6 = [6, "d6"];
let c7 = [7, "c7"]; let d7 = [7, "d7"];
let c8 = [8, "c8"]; let d8 = [8, "d8"];
let c9 = [9, "c9"]; let d9 = [9, "d9"];
let c10 = [10, "c10"]; let d10 = [10, "d10"]; 
let cJ = [10, "cJ"]; let dJ = [10, "dJ"]; 
let cQ = [10, "cQ"]; let dQ = [10, "dQ"];
let cK = [10, "cK"]; let dK = [10, "dK"];

//Array that holds all cards 
let cards = [sA,s2,s3,s4,s5,s6,s7,s8,s9,s10,sJ,sQ,sK,hA,h2,h3,h4,h5,h6,h7,h8,h9,h10,hJ,hQ,hK,cA,c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,dA,d2,d3,d4,d5,d6,d7,d8,d9,d10,dJ,dQ,dK];


// Give player starting cards
function playerStartCards(){
  let pran = 0;
  for (let i = 0; i < 2; i++){
    pran = Math.floor(Math.random()*cards.length);
    p1.push(cards[pran])
    cards.splice(pran,1);
    player.push(p1[i][0])
  }
  if (player[0] === 11 && player[1] === 11){
      player[1] = 1;
  }
}

// Give dealer starting cards
function dealerStartCards(){
  let dran = 0;
  for (let i = 0; i < 2; i++){
    dran = Math.floor(Math.random()*cards.length);
    d.push(cards[dran])
    cards.splice(dran,1);
    dealer.push(d[i][0])
  }
  if (dealer[0] === 11 && dealer[1] === 11){
      dealer[1] = 1;
  }
}
//Change A to 1 from 11 if necessary
function changeAce(){
  let dsum = 0;
  let sum = 0;
  for(let i = 0; i < player.length; i++){
    sum += player[i];
    if (sum > 21 && player[i] === 11){
      player[i] = 1;
    }
  }
  for(let i = 0; i < dealer.length; i++){
    dsum += dealer[i];
    if (dsum > 21 && dealer[i] === 11){
      dealer[i] = 1;
    }
  }
}
//Give start cards
playerStartCards()
dealerStartCards()

let count = 0;
let z = 2;
let x = 2;
if (bothequal21()){
  count = 1;
  document.getElementById("status").innerHTML = 
  "TIE!";
}

if (equal21()){
  count = 1;
  document.getElementById("status").innerHTML = 
  "YOU WIN!";
  document.getElementById("got21").innerHTML = "21!";
}

if (dealerEqual21()){
  count = 1;
  document.getElementById("status").innerHTML = 
  "YOU LOSE";
  document.getElementById("got21").innerHTML = "21!";
}

//If dealer is under 16 add card
function dealerHit(){
  let dsum = 0;
  for (let i = 0; i < dealer.length; i++){
    dsum += dealer[i]
  }
  if (dsum < 17){
    dran = Math.floor(Math.random()*cards.length);
    d.push(cards[dran])
    cards.splice(dran,1);
    dealer.push(d[x][0])
    x++
    return true;
    }
  return false;
}
//Checks if a dealer is over 21
function dealerBust(){
  let dsum = 0;
  for (let i = 0; i < player.length; i++)
  {
    dsum += dealer[i];
    if (dsum > 21){
      return true;
    }
  }
}

//Check sum of card values and if over 21 bust
function bust(){
  let sum = 0;
  for (let i = 0; i < player.length; i++)
  {
    sum += player[i]
    if (sum > 21){
      return true;
    }
  }
}

//Check sum of card values and if equal to 21 auto win
function equal21(){
  let sum = 0;
  for (let i = 0; i < player.length; i++)
  {
    sum += player[i]
    if (sum === 21){
      return true;
    }
  }
}

function dealerEqual21(){
  let sum = 0;
  for (let i = 0; i < dealer.length; i++)
  {
    sum += dealer[i]
    if (sum === 21){
      return true;
    }
  }
}

function bothequal21(){
  let sum = 0;
  let dsum = 0;
  for (let i = 0; i < player.length; i++){
    sum += player[i]
  }
  for (let i = 0; i < dealer.length; i++){
    dsum += dealer[i]
  }
  if (sum === 21 && dsum === 21){
    return true;
  }
}

//Checks who wins
function check(){
  let sum = 0;
  let dsum = 0;
  for (let i = 0; i < player.length; i++){
    sum += player[i]
  }
  for (let i = 0; i < dealer.length; i++){
    dsum += dealer[i]
  }
  if (sum > 21){
    return false;
  }
  else if (dsum > 21){
    return true;
  }
  else if (sum > dsum){
    return true;
  }
  else  {
    return false;
  }
}

//Check if tie 
function checkTie(){
  let sum = 0;
  let dsum = 0;
  for (let i = 0; i < player.length; i++){
    sum += player[i]
  }
  for (let i = 0; i < dealer.length; i++){
    dsum += dealer[i]
  }
    if (sum === dsum){
      return true;
    }
}

//Prints out and updates total score
function printTotalScores(){
  let sum = 0;
  let dsum = 0;
  for (let i = 0; i < player.length; i++){
    sum += player[i]
  }
  for (let i = 0; i < dealer.length; i++){
    dsum += dealer[i]
  }
  document.getElementById("player-score").innerHTML = "Player Total : " + sum;
  document.getElementById("dealer-score").innerHTML = "Dealer Total : " + dsum;
}
//when hit is clicked
$('.hit').click(function() {
  if (count === 0){
  let pran = 0;
  //generates random number to grab from array
    pran = Math.floor(Math.random()*cards.length);
  //pushes in player array of cards
    p1.push(cards[pran])
  //removes from cards array
    cards.splice(pran,1);
    player.push(p1[z][0])
    z++;
  //change value of Ace if necessary
    changeAce();
  //updates player score 
    document.getElementById("player").innerHTML = player;
  //if bust print bust and you lose in html
    printTotalScores()
    console.log(player)
    console.log(dealer)
    if (bust()){
      document.getElementById("status").innerHTML = 
      "YOU LOSE";
      document.getElementById("bust").innerHTML = "BUST!";
      displayPNew()
      count = 1;
    }
  //if equal 21 print 21 and you win in html
    else if (equal21()){
      document.getElementById("status").innerHTML = 
      "YOU WIN!";
      document.getElementById("got21").innerHTML = "21!";
      displayPNew()
      count = 1;
    }
    else{
        displayPNew()
    }
  }
});

//when hold is clicked
$('.hold').click(function() {
  if (count === 0){
  for (let i = 0; i < 6; i++){
    if (dealerHit()){ 
    //change value of Ace if necessary
      changeAce();
      document.getElementById("dealer").innerHTML = dealer;
      displayDNew()
    }
  }
  printTotalScores()
  if(dealerBust()){
    document.getElementById("status").innerHTML = "YOU WIN!";
    count = 1;
  }
  if (check()){
    document.getElementById("status").innerHTML = "YOU WIN!";count = 1;
  }
  else if (checkTie()){
    document.getElementById("status").innerHTML = "TIE!";
    count = 1;
  }
  else{
    document.getElementById("status").innerHTML = "YOU LOSE";
    count = 1;
  }
}
});

//console.log("dealer " + dealer)
//console.log("player " + player)

//print initial scores
document.getElementById("dealer").innerHTML = dealer;
document.getElementById("player").innerHTML = player;
printTotalScores()

function dealerDisplay(){
  var d1Card = document.querySelector("#d1Card");
  d1Card.style.display = "block";
  d1Card.src = "cards/" + d[0][1] + ".png";
  // console.log(d[0][1], "dealer")

  var d2Card = document.querySelector("#d2Card");
  d2Card.style.display = "block";
  d2Card.src = "cards/" + d[1][1] + ".png";
  // console.log(d[1][1])
}

function playerDisplay(){
  var p1Card = document.querySelector("#p1Card");
  p1Card.style.display = "block";
  p1Card.src = "cards/" + p1[0][1] + ".png";
  // console.log(p1[0][1], "player")

  var p2Card = document.querySelector("#p2Card");
  p2Card.style.display = "block"
  p2Card.src = "cards/" + p1[1][1] + ".png";
  // console.log(p1[1][1])
}

var n = 3;
var m = 2;
function displayDNew(){
  let nextCard = document.querySelector("#d" + n + "Card");
  nextCard.style.display = "block";
  nextCard.src = "cards/" + d[m][1] + ".png";
  n++;
  m++;
}

var y = 3;
var u = 2;
function displayPNew(){
  let nextCard = document.querySelector("#p" + y + "Card");
  nextCard.style.display = "block";
  nextCard.src = "cards/" + p1[u][1] + ".png";
  y++;
  u++;
}

dealerDisplay()
playerDisplay()