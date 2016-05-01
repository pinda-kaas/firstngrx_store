import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {messageReducer} from './app/reducers/messageReducer'
import {Store, provideStore} from '@ngrx/store';

import {SeedApp} from './app/seed-app';


bootstrap(SeedApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provideStore({messageReducer})
])
.catch(err => console.error(err));
