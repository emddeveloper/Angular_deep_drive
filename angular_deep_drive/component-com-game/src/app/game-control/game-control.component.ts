import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  counter = 0;
  timer: any;
  @Output() controllerEvents: EventEmitter<number> = new EventEmitter();
  constructor() {}

  start() {
    this.timer = setInterval(() => {
      this.counter++;
      this.controllerEvents.emit(this.counter);
    }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
  ngOnInit(): void {}
}
