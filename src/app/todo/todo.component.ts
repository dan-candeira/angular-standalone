import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from './item/item.component';
import { TodoList } from './list/list.component';

@Component({
	selector: 'app-todo',
	template: `
		<input type="text" />
		<ul todo-list>
			<li
				todo-item
				*ngFor="let todo of todoList$ | async"
				[todoId]="todo.id"
			>
				{{ todo.task }}
			</li>
		</ul>
	`,
	styles: [],
	standalone: true,
	// in order to import a component inside the
	// imports property the imported component also
	// must standalone
	imports: [CommonModule, TodoList, TodoItem],
})
export class Todo {
	// TODO: create TodoItem type
	todoList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
}
