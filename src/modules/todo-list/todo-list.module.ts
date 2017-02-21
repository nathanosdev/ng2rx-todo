import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemModule } from '../todo-item';
import { TodoListComponent }   from './todo-list.component';

@NgModule({
	imports: [CommonModule, FormsModule, TodoItemModule],
	exports: [TodoListComponent],
	declarations: [TodoListComponent]
})
export class TodoListModule { }
