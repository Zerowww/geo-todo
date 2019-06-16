import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {CoreModule} from './core/core.module';
import {MockTodos} from './core/mock/mock-todos';
import {metaReducers, reducers} from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'NgRx Geo Store Devtools',
          logOnly: environment.production,
        })
      : [],
    environment.useMockData
      ? HttpClientInMemoryWebApiModule.forRoot(MockTodos, {
          delay: 1000,
          post204: false,
          put204: false,
        })
      : [],
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
