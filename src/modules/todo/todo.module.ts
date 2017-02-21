import { NgModule } from '@angular/core';

import { TodoActions } from './todo.actions';
import { TodoService } from './todo.service';

@NgModule({
  providers: [TodoService, TodoActions]
})
export class TodoModule { }
