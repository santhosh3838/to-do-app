import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'app',
        pathMatch:'full'
    },
    {
        path:'todolist',
        component:TodolistComponent
    }
];
