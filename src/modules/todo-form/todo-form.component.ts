import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
	selector: 'amd-todo-form',
	template: require('./todo-form.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {
	@Output() public addTodo: EventEmitter<string> = new EventEmitter(false);

	public text: string = '';

	public clear = () => {
		this.text = '';
	}

	public submit = () => {
		let text: string = this.text.trim();
    if (!text.length) { return; }
		this.addTodo.emit(text);
		this.clear();
	}
}
