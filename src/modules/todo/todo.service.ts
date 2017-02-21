import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../app';
import { Todo } from './todo.model';
import { TodoActions, ITodoActionPayload } from './todo.actions';

@Injectable()
export class TodoService {
	public todos$: Observable<Array<Todo>>;
	public todosTotal$: Observable<number>;
	public todosIncomplete$: Observable<number>;

	constructor(
		private actions: TodoActions,
		private store: Store<IAppState>
	) {
		this.todos$ = this.store.select((state: IAppState) => state.todoState.todos);
		this.todosTotal$ = this.store.select((state: IAppState) => state.todoState.todosTotal);
		this.todosIncomplete$ = this.store.select((state: IAppState) => state.todoState.todosIncomplete);
	}

	public addTodo = (text: string) => {
		this.store.dispatch(this.actions.addTodo(new Todo(text)));
	}

	public deleteTodo = (todoId: number) => {
		this.store.dispatch(this.actions.deleteTodo(todoId));
	}

	public updateTodo = (payload: ITodoActionPayload) => {
		this.store.dispatch(this.actions.updateTodo(payload));
	}

	public clearCompleted = () => {
		this.store.dispatch(this.actions.clearCompleted());
	}

	public toggleAllTodos = (completed: boolean) => {
		this.store.dispatch(this.actions.toggleAllTodos(completed));
	}
}
