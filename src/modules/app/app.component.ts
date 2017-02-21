import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { TodoService, Todo } from '../todo';

@Component({
  selector: 'amd-app',
  template: require('./app.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	public todos: Observable<Array<Todo>>;
  public todosTotal: number;
  public todosIncomplete: number;

	constructor(public todoService: TodoService) { }

  public ngOnInit(): void {
		this.todos = this.todoService.todos$;
    
    this.todoService.todosTotal$.subscribe((todosTotal: number) => {
      this.todosTotal = todosTotal;
    });

    this.todoService.todosIncomplete$.subscribe((todosIncomplete: number) => {
      this.todosIncomplete = todosIncomplete;
    });
  }

	public addTodo = (event: any) => {
		this.todoService.addTodo(event);
	}

  public updateTodo = (event: any) => {
    this.todoService.updateTodo(event);
  }

  public deleteTodo = (event: any) => {
    this.todoService.deleteTodo(event);
  }

  public clearCompleted = () => {
    this.todoService.clearCompleted();
  }

  public toggleAllTodos = (completed: boolean) => {
    this.todoService.toggleAllTodos(completed);
  }
}
