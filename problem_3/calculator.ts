export class Calculator {

  private expressions: Array<string> = [];

  private evaluations: Array<number> = [];

  protected getExpression = (index: number): string => {
    return this.expressions[index];
  }

  protected getEvaluation = (index: number): number => {
    return this.evaluations[index];
  }

  protected addExpression = (expression: string): void => {
    this.expressions.push(expression);
  }

  protected addEvaluation = (evaluation: number): number => {
    this.evaluations.push(evaluation);
    return evaluation;
  }

  deleteExprAndEval = (index: number): void => {

    if (index > this.evaluations.length - 1) {
      return;
    }

    this.evaluations.splice(index, 1);
    this.expressions.splice(index, 1);
  }

  consoleAllAnswers = (): void => {
    
    if (this.expressions.length) {
      this.expressions.forEach((expression: string, index: number) => {
        console.log(`"${expression}" = ${this.evaluations[index]}`);
      });
    }
  }
}