import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../todo';

@Component({
	selector: 'amd-todo-item',
	template: require('./todo-item.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemComponent {
	@Input() public todo: Todo;
	@Output() public remove: EventEmitter<string> = new EventEmitter(false);
	@Output() public update: EventEmitter<any> = new EventEmitter(false);

	public editing: boolean = false;
	public text: string = '';

	public editText = () => {
		this.editing = true;
		this.text = this.todo.text;
	}

	public saveText = () => {
		if (this.editing) {
			let text: string = this.text.trim();
			if (text.length && text !== this.todo.text) {
				this.update.emit({ todoId: this.todo.id, todo: { text: text } });
			}
			this.stopEditing();
		}
	}

	public stopEditing = () => {
		this.editing = false;
	}

	public toggleStatus = () => {
		this.update.emit({ todoId: this.todo.id, todo: { completed: !this.todo.completed } });
	}

	public removeTodo = (id: string) => {
		this.remove.emit(id);
	}
}
