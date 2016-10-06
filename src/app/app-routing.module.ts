import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'add-bookmark',
        component: AddBookmarkComponent
    },
    {
        path: 'edit-bookmark/:id',
        component: EditBookmarkComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TastyClientRoutingModule { }
