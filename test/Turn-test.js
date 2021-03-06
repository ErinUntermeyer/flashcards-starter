const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it("should store a guess", () => {
    const turn = new Turn("object");
    expect(turn.guess).to.equal("object");
  })

  it("should store a card", () => {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn("object", card);
    expect(turn.card).to.equal(card);
  })

  it("should return a guess", () => {
    const turn = new Turn("object");
    expect(turn.returnGuess()).to.equal("object");
  })

  it("should return a card", () => {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn("object", card);
    expect(turn.returnCard()).to.equal(card);
  })

  it("should evaluate the guess", () => {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn1 = new Turn("object", card);
    const turn2 = new Turn("array", card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  })

  it("should give feedback based on guess evaluation", () => {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn1 = new Turn("object", card);
    const turn2 = new Turn("array", card);
    expect(turn1.giveFeedback()).to.equal("correct!");
    expect(turn2.giveFeedback()).to.equal("incorrect!");
  })

});