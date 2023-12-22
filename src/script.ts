const dices: NodeListOf<HTMLElement> = document.querySelectorAll('.dice.faded');
const button: HTMLButtonElement | null = document.querySelector('button');
const gameDice: HTMLElement | null = document.querySelector('#dice');
const gameClass: DOMTokenList | undefined = gameDice?.classList;

let points: number = 0;
let throws: number = 0;

class Dice {
  sides: number[];
  dots!: number;

  constructor() {
    this.sides = [1, 2, 3, 4, 5, 6];
    this.roll();
  }

  roll(): void {
    const randomIndex: number = Math.floor(Math.random() * this.sides.length);
    this.dots = this.sides[randomIndex];
    this.onRoll();
  }

  onRoll(): void {
    const lastClass: string | undefined = gameClass?.item(gameClass.length - 1) || '';

    if (lastClass !== 'dice' && gameClass) {
      gameClass.remove(lastClass);
    }

    if (gameClass) {
      gameClass.add(`dots-${this.dots}`);
    }
  }
}

const dice = new Dice();

const rollDice = (): void => {
  throws++;
  if (button) {
    button.textContent = `Kasta (${throws})`;
  }

  dice.roll();

  checkResult(dice);
};

const checkResult = (rolledDice: Dice): void => {
  if (rolledDice.dots === dice.sides[points]) {
    dices[points]?.classList.toggle('faded');
    if (points === 5 && button) {
      button.textContent = `Spela igen? (${throws})`;
    }
    points++;
  }
};

button?.addEventListener('click', () => {
  if (points === 6) {
    location.reload();
  } else {
    rollDice();
  }
});
