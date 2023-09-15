import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/edit-thought/edit-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
  },
  {
    path: 'create-thought',
    component: CreateThoughtComponent,
  },
  {
    path: 'list-thought',
    component: ListThoughtsComponent,
  },
  {
    path: 'thoughts/delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'thoughts/edit-thought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
