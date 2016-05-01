import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Receiver} from './components/receiver';
import {Sender} from './components/sender';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {Store, provideStore} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {messageReducer} from "./reducers/messageReducer";


@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  templateUrl: './app/seed-app.html',
  directives: [ROUTER_DIRECTIVES,Receiver,Sender]
})
@RouteConfig([
  { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
  { path: '/about',      component: About,       name: 'About' },
  { path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' },
])
export class SeedApp {
  public people;
  private id = 0;

  constructor(private store: Store<provideStore(any)>) {
    //this.items = store.select('items'); // Bind an observable of our items to "ItemsService"
  }

  sendMessage(){
    debugger;
    this._store.dispatch({type: "SEND_MESSAGE", payload: {
     data:'testing'
    }})
  }


}
