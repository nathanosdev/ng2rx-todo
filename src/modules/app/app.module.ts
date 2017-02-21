import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { TodoModule } from '../todo';
import { TodoFormModule } from '../todo-form';
import { TodoListModule } from '../todo-list';
import { AppInfoModule } from '../app-info';
import { TodoInfoModule } from '../todo-info';

import { AppComponent } from './app.component';
import { AppStore } from './app.store';

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot([]),

    StoreModule.provideStore(AppStore),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
		RouterStoreModule.connectRouter(),

    TodoModule, TodoFormModule,
    TodoListModule, TodoInfoModule,
    AppInfoModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
