import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.css'],
})
export class ServerInputComponent implements OnInit {
  @Output() serverCreated: EventEmitter<{ name: string; desc: string }> =
    new EventEmitter();
  @Output() serverBlueprintCreated: EventEmitter<{
    name: string;
    desc: string;
  }> = new EventEmitter();
  constructor() {}
  // serverName: string;
  @ViewChild('serverName') serverNameViewChild: ElementRef;
  serverDesc: string;
  addServer(serverName: HTMLInputElement) {
    if (
      this.isEmptyCheck(serverName.value) ||
      this.isEmptyCheck(this.serverDesc)
    )
      return;
    this.serverCreated.emit({
      // name: serverName.value,
      name: this.serverNameViewChild.nativeElement.value,
      desc: this.serverDesc,
    });
  }
  addServerBlueprint(serverName: HTMLInputElement) {
    if (
      this.isEmptyCheck(serverName.value) ||
      this.isEmptyCheck(this.serverDesc)
    )
      return;
    this.serverBlueprintCreated.emit({
      name: this.serverNameViewChild.nativeElement.value,
      desc: this.serverDesc,
    });
  }
  isEmptyCheck(value: any) {
    if (value === '' || value === undefined || value === null) return true;
    return false;
  }
  ngOnInit(): void {}
}
