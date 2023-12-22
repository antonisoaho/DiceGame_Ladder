const dices = document.querySelectorAll('.dice.faded');
const button = document.querySelector('button');
const gameDice = document.querySelector('#dice');
const gameClass = gameDice === null || gameDice === void 0 ? void 0 : gameDice.classList;
let points = 0;
let throws = 0;
class Dice {
    constructor() {
        this.sides = [1, 2, 3, 4, 5, 6];
        this.roll();
    }
    roll() {
        const randomIndex = Math.floor(Math.random() * this.sides.length);
        this.dots = this.sides[randomIndex];
        this.onRoll();
    }
    onRoll() {
        const lastClass = (gameClass === null || gameClass === void 0 ? void 0 : gameClass.item(gameClass.length - 1)) || '';
        if (lastClass !== 'dice' && gameClass)
            gameClass.remove(lastClass);
        if (gameClass)
            gameClass.add(`dots-${this.dots}`);
    }
}
const dice = new Dice();
const rollDice = () => {
    throws++;
    if (button) {
        button.textContent = `Kasta (${throws})`;
    }
    dice.roll();
    checkResult(dice);
};
const checkResult = (rolledDice) => {
    var _a;
    if (rolledDice.dots === dice.sides[points]) {
        (_a = dices[points]) === null || _a === void 0 ? void 0 : _a.classList.toggle('faded');
        if (points === 5 && button) {
            button.textContent = `Spela igen? (${throws})`;
        }
        points++;
    }
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if (points === 6) {
        location.reload();
    }
    else {
        rollDice();
    }
});
