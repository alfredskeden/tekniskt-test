var calculatorC = /** @class */ (function () {
    function calculatorC() {
    }
    calculatorC.prototype.removeSpaces = function (removeSpace) {
        return removeSpace.replace(/\s/g, '');
    };
    calculatorC.prototype.isNumber = function (checkString) {
        return checkString === '+' ? checkString : checkString === '-' ? checkString :
            checkString === '*' ? checkString : checkString === '/' ? checkString : Number(checkString);
    };
    calculatorC.prototype.level3 = function (expression) {
        if (expression.length === 1) {
            return Number(expression[0]);
        }
        var tempValue = undefined;
        var savedIndex = undefined;
        expression.every(function (x, index) {
            if (typeof x === 'string') {
                if (x === '*' || x === '/') {
                    tempValue = (x === '*') ? expression[index - 1] * expression[index + 1] :
                        expression[index - 1] / expression[index + 1];
                    savedIndex = index;
                    return false;
                }
                else {
                    tempValue = (tempValue) ? tempValue :
                        (x === '+') ? expression[index - 1] + expression[index + 1] :
                            expression[index - 1] - expression[index + 1];
                    savedIndex = (!savedIndex) ? index : savedIndex;
                }
            }
            return true;
        });
        expression[savedIndex] = tempValue;
        expression.splice(savedIndex + 1, 1);
        expression.splice(savedIndex - 1, 1);
        return this.level3(expression);
    };
    calculatorC.prototype.checkIfOperator = function (operator) {
        if (operator === '+') {
            return true;
        }
        else if (operator === '-') {
            return true;
        }
        else if (operator === '/') {
            return true;
        }
        else if (operator === '*') {
            return true;
        }
        return false;
    };
    calculatorC.prototype.evaluate = function (calc) {
        var _this = this;
        if (!calc.length) {
            return 0;
        }
        var removedSpace = this.removeSpaces(calc);
        var splitCalc = removedSpace.match(/[^\d()]+|[\d.]+/g);
        if (this.checkIfOperator(splitCalc[0])) {
            return 0;
        }
        var newCalcArray = splitCalc.map(function (x) {
            return x = _this.isNumber(x);
        });
        return this.level3(newCalcArray);
    };
    return calculatorC;
}());
var calculator = new calculatorC();
console.log('should be 32: is ', calculator.evaluate("2+30"));
console.log('should be 6: is ', calculator.evaluate("2 * 3"));
console.log('should be -1: is ', calculator.evaluate("2 -3"));
console.log('should be 0.6666666666666: is ', calculator.evaluate("2 / 3"));
// Level 2
console.log('should be 36: is ', calculator.evaluate("2+30+4"));
console.log('should be 18: is ', calculator.evaluate("2 - 3 + 4 + 15"));
console.log('should be 24: is ', calculator.evaluate("2 * 3 * 4"));
console.log('should be 30: is ', calculator.evaluate("2 * 3 / 4 * 20"));
// level 3
console.log('should be 122: is ', calculator.evaluate("2+3*40"));
console.log('should be 10: is ', calculator.evaluate("2 * 3 + 4"));
console.log('should be 3.6666666666667: is ', calculator.evaluate("2 / 3 + 4 - 1"));
console.log('should be -10: is ', calculator.evaluate("2 - 3 * 4"));
