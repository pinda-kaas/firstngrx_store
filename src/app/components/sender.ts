import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: 'sender',
  template: `

<button (click)="sendMessage.emit()">Send message</button>
    `
})

export class Sender {
  @Output() sendMessage= new EventEmitter();

}
