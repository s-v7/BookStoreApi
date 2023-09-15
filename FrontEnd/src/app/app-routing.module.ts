import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'departments', component: DepartmentsComponent }

];



@NgModule({
  
	imports: [
		RouterModule.forRoot(routes)],
  
	exports: [RouterModule]

})


export class AppRoutingModule { }
