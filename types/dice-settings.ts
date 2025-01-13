import Die from "./die";

type DiceSettings = {
  numDice: number;
  numSides: number;
  startNumber: number;
  numSteps: number;
  allDice: Die[];
};

export default DiceSettings;
