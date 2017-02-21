import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent }   from './todo-form.component';

@NgModule({
	imports: [FormsModule],
	exports: [TodoFormComponent],
	declarations: [TodoFormComponent]
})
export class TodoFormModule { }
