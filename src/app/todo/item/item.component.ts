import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: '[todo-item]',
	template: `
		<ng-content></ng-content>
		<button>delete</button>
	`,
	styles: [``],
	host: {},
	standalone: true,
	imports: [CommonModule],
})
export class TodoItem {
	@Input() todoId: number = 0;
	@Output() delete: EventEmitter<null> = new EventEmitter();
}
