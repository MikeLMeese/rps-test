const hands = ["rock", "paper", "scissors"];
let Player1 = {
  name: "Ya boi",
  hand: getHand,
};
let Player2 = {
  name: "Bill Nye",
  hand: getHand,
};
function getHand() {
  n = parseInt(Math.random() * 10) % 3;
  if (n === 0) {
    return hands[0];
  } else if (n === 1) {
    return hands[1];
  } else if (n === 2) {
    return hands[2];
  }
}
let WinningHand = {
  rock: hands[2],
  paper: hands[0],
  scissors: hands[1],
};
function playRound(p1, p2) {
    let p1Hands = p1.hand();
    let p2Hands = p2.hand();
  console.log(p1.name, "plays", p1Hands);
  console.log(p2.name, "plays", p2Hands);
  if (p1Hands === p2Hands) {
    console.log("It is a tie!");
    return null;
  } else if (WinningHand[p1Hands] === p2Hands) {
    console.log(`${p1.name} wins!`);
    return p1;
  } else {
    console.log(`${p2.name} wins!`);
    return p2;
  }
}
function playGame(Player1, Player2, playUntil) {
    let Player1Score = 0;
    let Player2Score = 0;
    let WinningPlayer;
  while (Player1Score < playUntil && Player2Score < playUntil) {
    WinningPlayer = playRound(Player1, Player2);
    if (WinningPlayer === Player1) {
      Player1Score++;
      console.log(Player1Score, '-', Player2Score);
    } else if (WinningPlayer === Player2) {
      Player2Score++;
      console.log(Player1Score, '-', Player2Score);
    }
  }
  if (Player1Score === playUntil) {
    return `${Player1.name} is the winner!`;
  } else {
    return `${Player2.name} is the winner!`;
  }
}
console.log(playGame(Player1, Player2, 5));
module.exports = { hands, Player1, Player2, getHand };