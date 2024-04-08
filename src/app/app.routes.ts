import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

export const routes: Routes = [
    {path:'', component: RegisterComponent},
    // {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent}
];
