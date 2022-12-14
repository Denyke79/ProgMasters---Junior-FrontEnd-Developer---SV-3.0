import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colored-button',
  templateUrl: './colored-button.component.html',
  styleUrls: ['./colored-button.component.scss']
})
export class ColoredButtonComponent implements OnInit {

  @Input() label: string = "Now you can't click me :(";
  // @Input() label: string = "";
  @Input() isDisabled: boolean = true;

  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickCounter(): void {
    this.clickEvent.emit();
  }



}
