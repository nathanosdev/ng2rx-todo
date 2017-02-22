import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';

@Component({
	selector: 'amd-todo-list',
	template: require('./todo-list.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnInit {
	@Input() public todos: Observable<Array<Todo>>;

	@Output() public remove: EventEmitter<any> = new EventEmitter(false);
	@Output() public update: EventEmitter<any> = new EventEmitter(false);
  @Output() public toggleAll: EventEmitter<boolean> = new EventEmitter(false);

  public completed: boolean = true;

  public ngOnInit(): void {
    this.completed = false;
  }

  public removeTodo = ($event: any) => {
    this.remove.emit($event);
  }

  public updateTodo = ($event: any) => {
    this.update.emit($event);
  }

  public toggleAllTodos = () => {
    this.toggleAll.emit(this.completed);
  }
}
