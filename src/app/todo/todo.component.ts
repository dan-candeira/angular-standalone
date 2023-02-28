import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from './item/item.component';
import { TodoList } from './list/list.component';

@Component({
	selector: 'app-todo',
	template: `
		<form (ngSubmit)="create()">
			<input type="text" [formControl]="formControl" />
			<button>Adicionar</button>
		</form>
		<ul todo-list>
			<ng-container *ngIf="todoList$ | async as todoList">
				<li
					todo-item
					*ngFor="let todo of todoList"
					[todoId]="todo.id"
					(delete)="delete($event)"
				>
					{{ todo.task }}
				</li>
				<li *ngIf="todoList.length == 0">
					You have no tasks <span aria-hidden="true">🎉🎉</span> try
					adding one
				</li>
			</ng-container>
		</ul>
	`,
	styles: [],
	standalone: true,
	// in order to import a component inside the
	// imports property the imported component must
	// also be standalone
	imports: [
		CommonModule,
		TodoList,
		TodoItem,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class Todo {
	// TODO: create TodoItem type
	todoList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	formControl: FormControl = new FormControl();

	delete(id: number) {
		const _todoCache = this.todoList$.value;
		this.todoList$.next(_todoCache.filter((todo) => todo.id != id));
	}

	create() {
		const _todoCache = this.todoList$.value;
		const newTodo = {
			id: _todoCache.length + 1,
			task: this.formControl.value,
		};

		this.todoList$.next([..._todoCache, newTodo]);
	}
}
