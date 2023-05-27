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
    if (value === '=') {
      // Check the exercise valid
      try {
        this.mathExercise = eval(this.mathExercise).toString();
      }
      catch (error) {
        this.mathExercise = 'Error';
      }
    }
    else {
      // Append the clicked value to the math exercise
      this.mathExercise += value;
    }
  }
  
  resetExercise() {
    this.mathExercise = '';
  }
  
}
