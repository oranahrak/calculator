import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent {
  @Input() number: number = 0;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  handleClick() {
    const value = this.number.toString();
    this.buttonClick.emit(value);
  }
}
