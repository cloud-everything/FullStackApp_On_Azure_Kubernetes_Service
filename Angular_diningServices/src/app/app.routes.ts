import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditviewComponent } from './components/editview/editview.component';

export const routes: Routes = [
    { path: 'frontend/home',component: HomeComponent},
    {path:'frontend/editview',component:EditviewComponent},
    { path: '**',redirectTo: 'frontend/home' },
];
