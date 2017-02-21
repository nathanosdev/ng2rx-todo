import { ActionReducer } from '@ngrx/store';

import { ITodoAction, TodoActions } from './todo.actions';
import { Todo } from './todo.model';
import { ITodoState, InitialTodoState } from './todo.state';

let prevTodoId: number = 0;

const CalculateTodoMetrics: Function = (todos: Array<Todo>) => {
  return {
    todosTotal: todos.length,
    todosIncomplete: todos.filter((todo: Todo) => !todo.completed).length
  };
};

export const TodoReducer: ActionReducer<ITodoState> =
(state: ITodoState = InitialTodoState, action: ITodoAction) => {
  let todos: Array<Todo>;

  switch (action.type) {
    case TodoActions.ADD_TODO:
      if (!action.payload.todo) { return state; }
      let newTodo: Todo = Object.assign({}, action.payload.todo, { id: prevTodoId++ });
      todos = state.todos.concat([newTodo]);
      return Object.assign({}, CalculateTodoMetrics(todos), { todos });

    case TodoActions.DELETE_TODO:
      todos = state.todos.filter((todo: Todo) => todo.id !== action.payload.todoId);
      return Object.assign({}, CalculateTodoMetrics(todos), { todos });

    case TodoActions.UPDATE_TODO:
      todos = state.todos.map((todo: Todo) => {
        return todo.id === action.payload.todoId ?
          Object.assign({}, todo, action.payload.todo) : todo;
      });
      return Object.assign({}, CalculateTodoMetrics(todos), { todos });
    
    case TodoActions.CLEAR_COMPLETED:
      todos = state.todos.filter((todo: Todo) => !todo.completed);
      return Object.assign({}, CalculateTodoMetrics(todos), { todos });

    case TodoActions.TOGGLE_ALL_TODOS:
      todos = state.todos.map((todo: Todo) => Object.assign({}, todo, { completed: action.payload.completed }));
      return Object.assign({}, CalculateTodoMetrics(todos), { todos });

    default:
      return state;
  };
};
