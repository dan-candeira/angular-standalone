import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './todo/todo.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'todo',
	},
	{
		path: 'todo',
		component: Todo,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
