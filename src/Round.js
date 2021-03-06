const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);
    this.turns++;
    this.deck.shift();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns * 100));
  }

  endRound() {
    if (this.calculatePercentCorrect() <= 90) {
      console.log(`Oops! You scored a ${this.calculatePercentCorrect()}%! Play again to score 90% or higher!`);
      return process.exit();
    } else {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      return process.exit();
    }
  }
}

module.exports = Round;