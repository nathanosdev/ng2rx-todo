import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoInfoComponent } from './todo-info.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoInfoComponent],
  exports: [TodoInfoComponent]
})
export class TodoInfoModule { }
