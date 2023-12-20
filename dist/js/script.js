"use strict";
var dices = document.querySelectorAll('.dice.faded');
var button = document.querySelector('button');
var gameDice = document.querySelector('#dice');
var gameClass = gameDice === null || gameDice === void 0 ? void 0 : gameDice.classList;
var points = 0;
var throws = 0;
var Dice = (function () {
    function Dice() {
        this.sides = [1, 2, 3, 4, 5, 6];
        this.roll();
    }
    Dice.prototype.roll = function () {
        var randomIndex = Math.floor(Math.random() * this.sides.length);
        this.dots = this.sides[randomIndex];
        this.onRoll();
    };
    Dice.prototype.onRoll = function () {
        var lastClass = (gameClass === null || gameClass === void 0 ? void 0 : gameClass.item(gameClass.length - 1)) || '';
        if (lastClass !== 'dice' && gameClass) {
            gameClass.remove(lastClass);
        }
        if (gameClass) {
            gameClass.add("dots-".concat(this.dots));
        }
    };
    return Dice;
}());
var dice = new Dice();
var rollDice = function () {
    throws++;
    if (button) {
        button.textContent = "Kasta (".concat(throws, ")");
    }
    dice.roll();
    checkResult(dice);
};
var checkResult = function (rolledDice) {
    var _a;
    if (rolledDice.dots === dice.sides[points]) {
        (_a = dices[points]) === null || _a === void 0 ? void 0 : _a.classList.toggle('faded');
        if (points === 5 && button) {
            button.textContent = "Spela igen? (".concat(throws, ")");
        }
        points++;
    }
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    if (points === 6) {
        location.reload();
    }
    else {
        rollDice();
    }
});
