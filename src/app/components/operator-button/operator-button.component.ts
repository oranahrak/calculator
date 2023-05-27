import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.css']
})

//component input, output and clicked function
export class OperatorButtonComponent {
  @Input() operator: string = '';
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  //operator clicked
  handleClick() {
    this.buttonClick.emit(this.operator);
  }
}
