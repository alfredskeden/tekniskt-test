class calc {
  
  private removeSpaces(removeSpace: string): string {
    return removeSpace.replace(/\s/g, '');
  }

  private isNumber(checkString: string | number): number | string {
    return checkString === '+' ? checkString : checkString === '-' ? checkString :
           checkString === '*' ? checkString : checkString === '/' ? checkString : Number(checkString);
  }

  private level3(expression: Array<string | number>): number {

    if (expression.length === 1) {
      return Number(expression[0])
    }

    let tempValue: number = undefined;
    let savedIndex: number = undefined;

    expression.every((x: string | number, index: number) => {

      if (typeof x === 'string') {
        if (x === '*' || x === '/') {
          tempValue = (x === '*') ? (expression[index - 1] as number) * (expression[index + 1] as number) :
                                  (expression[index - 1] as number) / (expression[index + 1] as number);
          savedIndex = index;
          return false;
        } else {
          tempValue = (tempValue) ? tempValue :
                      (x === '+') ? (expression[index - 1] as number) + (expression[index + 1] as number) :
                                       (expression[index - 1] as number) - (expression[index + 1] as number);
          savedIndex = (!savedIndex) ? index : savedIndex;
        }
      }

      return true;
    })

    expression[savedIndex] = tempValue;
    expression.splice(savedIndex + 1, 1);
    expression.splice(savedIndex - 1, 1);

    return this.level3(expression);
  }

  private checkIfOperator(operator: string ): boolean {
    if (operator === '+') {
      return true;
    } else if (operator === '-') {
      return true
    } else if (operator === '/') {
      return true
    } else if (operator === '*') {
      return true
    }
    
    return false;
  }

  evaluate(calc: string): number {

    if (!calc.length) {
      return 0;
    }

    const removedSpace: string = this.removeSpaces(calc);
    const splitCalc: Array<string> = removedSpace.match(/[^\d()]+|[\d.]+/g);

    if (this.checkIfOperator(splitCalc[0])) {
      return 0;
    }

    const newCalcArray: Array<string | number> = splitCalc.map((x: string | number) => {
      return x = this.isNumber(x);
    })

    return this.level3(newCalcArray);
  }
}

const calculator: calc = new calc();

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