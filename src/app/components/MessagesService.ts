import {Observable} from "rxjs/Observable";
import {Store, provideStore} from '@ngrx/store';
import {Component} from 'angular2/core';
import {Injectable} from "angular2/core";

@Injectable()
export class MessagesService {
  public messages$: Observable<['']>;

  constructor(private _store : Store<any>){
    const state$: Observable<['']> = _store.select('messageReducer');
    this.messages$ = state$.map(state => state.message);
  }

}
