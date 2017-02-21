import { Action } from '@ngrx/store';

import { Todo } from './todo.model';

export interface ITodoActionPayload {
	todo?: Todo;
	todoId?: number;
	completed?: boolean;
}

export interface ITodoAction extends Action {
	payload: ITodoActionPayload;
}

export class TodoActions {
	public static ADD_TODO: string = 'ADD_TODO';
	public static DELETE_TODO: string = 'DELETE_TODO';
	public static UPDATE_TODO: string = 'UPDATE_TODO';
	public static CLEAR_COMPLETED: string = 'CLEAR_COMPELTED';
	public static TOGGLE_ALL_TODOS: string = 'TOGGLE_ALL_TODOS';

	public addTodo(todo: Todo): ITodoAction {
		return {
			type: TodoActions.ADD_TODO,
			payload: { todo }
		};
	}

	public deleteTodo(todoId: number): ITodoAction {
		return {
			type: TodoActions.DELETE_TODO,
			payload: { todoId }
		};
	}

	public updateTodo(payload: ITodoActionPayload): ITodoAction {
		return {
			type: TodoActions.UPDATE_TODO,
			payload
		};
	}

	public clearCompleted(): ITodoAction {
		return {
			type: TodoActions.CLEAR_COMPLETED,
			payload: {}
		};
	}

	public toggleAllTodos(completed: boolean): ITodoAction {
		return {
			type: TodoActions.TOGGLE_ALL_TODOS,
			payload: { completed }
		};
	}
}
