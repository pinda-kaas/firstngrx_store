import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {MessagesService} from "./MessagesService";

@Component({
  selector: 'receiver',
  template: `<span>{{message | async}}</span>`
})

export class Receiver {
  messages$: Observable<['']>;

  constructor(private messagesSvc: MessagesService){ // svc is injected
    this.messages$ = messagesSvc.messages$;
  }
}
