import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumFormComponent } from './components/forum-form/forum-form.component';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'forums', pathMatch: 'full' },
  { path: 'forums/details/:id', component: ForumDetailsComponent },
  { path: 'forums', component: ForumListComponent },
  { path: 'forums/new', component: ForumFormComponent },
  { path: 'forums/edit/:id', component: ForumFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
