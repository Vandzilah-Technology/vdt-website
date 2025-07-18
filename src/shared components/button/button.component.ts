import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonClassName: string = '';
  @Output() onButtonClickedEvent = new EventEmitter<any>();

  buttonContent: string = "Learn More";

  onClickButtonClicked(): void {
    this.onButtonClickedEvent.emit()
  }
}
