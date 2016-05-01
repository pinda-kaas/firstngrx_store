import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';

@Component({
    selector: 'receiver',
    template: `

<span>{{message}}</span>
    `
})

export class Receiver {
    @Input() message;

}
