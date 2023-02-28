import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: '[todo-item]',
	template: `
		<ng-content></ng-content>
		<button (click)="delete.emit(todoId)">delete</button>
	`,
	styles: [``],
	host: {},
	standalone: true,
	imports: [CommonModule],
})
export class TodoItem {
	@Input() todoId: number = 0;
	@Output() delete: EventEmitter<number> = new EventEmitter();
}
