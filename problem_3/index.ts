class calc {
  /** function that takes a string and evaluates its mathematical expression and returns it as a number */
  evaluate(calc: string): number {

    /** returns 0 if string does not exist or is empty or first cell is an operator */
    if (!calc?.length || this.checkIfOperator(calc[0])) {
      return 0;
    }

    /** cleaning the string */
    const removedSpace: string = this.removeSpaces(calc);
    /** splitting the string on operators and keeps the numbers and operators separately */
    const splitCalc: Array<string> = removedSpace.match(/[^\d]+|[\d.]+/g);

    /** Converts string numbers to numbers and keeps operators as strings */
    const newCalcArray: Array<string | number> = splitCalc.map((x: string | number) => {
      return x = this.convertToNumber(x);
    })

    /** recursion calculation to get the correct answer from expression array */
    return this.level3(newCalcArray);
  }

  /** removes all spaces from a string */
  private removeSpaces(removeSpace: string): string {
    return removeSpace.replace(/\s/g, '');
  }

  /** Converts number string to number and keeps operators as strings */
  private convertToNumber(checkString: string | number): number | string {
    return (checkString === '+' || checkString === '-' || checkString === '*' || checkString === '/') ? checkString : Number(checkString);
  }

  /** Checks if string is a valid operator */
  private checkIfOperator(operator: string): boolean {
    return (operator === '+' || operator === '-' || operator === '/' || operator === '*') ?? false;
  }

  /** The level3 to evaluate the expression array */
  private level3(expression: Array<string | number>): number {

    /** if array is length 1 return 0 */
    if (expression.length === 1) {
      return Number(expression[0])
    }

    /** Temp values to keep track of the every function values */
    let tempValue: number;
    let savedIndex: number;

    /** Uses every instead of forEach so that I can break it using return false */
    expression.every((x: string | number, index: number) => {

      /** Checks if iteration is an operator */
      if (typeof x === 'string') {
        /** prioritize division and multi */
        if (x === '*' || x === '/') {
          tempValue = (x === '*') ? (expression[index - 1] as number) * (expression[index + 1] as number) :
                                  (expression[index - 1] as number) / (expression[index + 1] as number);
          savedIndex = index;
          /** Break the every loop and do the calc again after removing the array index poss with recursion */
          return false;
        } else {
          /** saves the first calc on addition and sub but saves only the first one but does not break to check for multi or division */
          tempValue = (tempValue) ? tempValue :
                      (x === '+') ? (expression[index - 1] as number) + (expression[index + 1] as number) :
                                       (expression[index - 1] as number) - (expression[index + 1] as number);
          savedIndex = (!savedIndex) ? index : savedIndex;
        }
      }

      return true;
    })

    /** sets the index value to the expression */
    expression[savedIndex] = tempValue;
    /** removes the index in the right and then on the left */
    expression.splice(savedIndex + 1, 1);
    expression.splice(savedIndex - 1, 1);

    /** Using recursion and only exits if there is only 1 value left and that is the answer */
    return this.level3(expression);
  }
}

const calculator: calc = new calc();

console.log(`"" is not valid and returns: `, calculator.evaluate(""));
console.log(`undefined is not valid and returns: `, calculator.evaluate(undefined));
console.log(`"+3" is not valid and returns: `, calculator.evaluate("+3"));
console.log(`"2+30" = 32: is `, calculator.evaluate("2+30"));
console.log(`"2 * 3" = 6: is `, calculator.evaluate("2 * 3"));
console.log(`"2 -3" = -1: is `, calculator.evaluate("2 -3"));
console.log(`"2 / 3" = 0.6666666666666: is `, calculator.evaluate("2 / 3"));
// Level 2
console.log(`"2+30+4" = 36: is `, calculator.evaluate("2+30+4"));
console.log(`"2 - 3 + 4 + 15" = 18: is `, calculator.evaluate("2 - 3 + 4 + 15"));
console.log(`"2 * 3 * 4"= 24: is `, calculator.evaluate("2 * 3 * 4"));
console.log(`"2 * 3 / 4 * 20"= 30: is `, calculator.evaluate("2 * 3 / 4 * 20"));
// level 3
console.log(`"2+3*40" = 122: is `, calculator.evaluate("2+3*40"));
console.log(`"2 * 3 + 4" = 10: is `, calculator.evaluate("2 * 3 + 4"));
console.log(`"2 / 3 + 4 - 1" = 3.6666666666667: is `, calculator.evaluate("2 / 3 + 4 - 1"));
console.log(`"2 - 3 * 4" = -10: is `, calculator.evaluate("2 - 3 * 4"));