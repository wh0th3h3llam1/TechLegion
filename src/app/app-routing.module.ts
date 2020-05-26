import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
	{ path : 'login', component : LoginComponent },

	{ path : 'doctor', component : DoctorComponent },
	{ path : 'nurse', component : NurseComponent },

	{ path : '', component : HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	HomeComponent,
	LoginComponent,
	NurseComponent,
	DoctorComponent,
]
