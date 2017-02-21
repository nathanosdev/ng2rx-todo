import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'amd-todo-info',
  template: require('./todo-info.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInfoComponent {
  @Input() public todosTotal: number;
  @Input() public todosIncomplete: number;
  @Output() public clearCompleted: EventEmitter<void> = new EventEmitter<void>(false);

  public clearCompletedTodos = () => {
    this.clearCompleted.emit();
  }
}
