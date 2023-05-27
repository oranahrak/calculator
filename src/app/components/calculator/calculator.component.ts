import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operators: string[] = ['*', '/', '+', '-'];
  mathExercise: string = '';

  //control the clicked button
  handleButtonClick(value: string) {
      // Append the clicked value to the math exercise
      this.mathExercise += value;
  }

  exerciseExecute(value: string){
    // Check the exercise valid
    const result = eval(this.mathExercise);
    if (Number.isFinite(result)) {
      this.mathExercise = result.toString();
    }
    else {
      this.mathExercise = 'Error';
      console.log('Error occurred during evaluation:', result);
    }
  }
  
  resetExercise() {
    this.mathExercise = '';
  }
  
}
