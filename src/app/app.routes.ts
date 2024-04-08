import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: RegisterComponent},
    {path:'login', component: LoginComponent},
];
