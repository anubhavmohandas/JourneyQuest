import { ExtraOptions, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { BucketListComponent } from './bucketlist/bucketlist.component';
import { TravelComponent } from './travel/travel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};

export const routes: Routes = [
    // {path:'', component: RegisterComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'bucketlist', component: BucketListComponent},
    {path:'travel', component: TravelComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'aboutus', component: AboutusComponent}, 
    {path:'contactus', component: ContactUsComponent},
    // {path:'**', component:LoginComponent},
];


NgModule({
    imports:[CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})