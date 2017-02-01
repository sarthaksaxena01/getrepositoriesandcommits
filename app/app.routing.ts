import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileComponent} from './components/profile.component';
import {LoginComponent} from './components/login/login.component';


const appRoutes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'profile/:name',
        component:ProfileComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);