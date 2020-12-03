import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() {}

    @Input()
    value: number;

    @Input()
    max: number;

    @Output()
    valueChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upValue(): void {
    if (this.value < this.max){
      this.value++;
      this.valueChange.emit(this.value);
    }
  }

  downValue(): void {
    if (this.value > 0){
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  changeValue(event): void {
    console.log(event.key);
    this.valueChange.emit(this.value);
  }

}
