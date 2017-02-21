import { Todo } from './todo.model';

export interface ITodoState {
  todos: Array<Todo>;
  todosTotal: number;
  todosIncomplete: number;
}

export const InitialTodoState: ITodoState = {
  todos: new Array<Todo>(),
  todosTotal: 0,
  todosIncomplete: 0
};
