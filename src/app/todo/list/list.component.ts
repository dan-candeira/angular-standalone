import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoItem } from '../item/item.component';

@Component({
	selector: '[todo-list]',
	template: ` <ng-content></ng-content> `,
	styles: [],
	imports: [],
	standalone: true,
})
export class TodoList {}
