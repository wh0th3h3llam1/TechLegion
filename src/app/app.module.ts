import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* For Custom Icons */
import { HttpClientModule } from "@angular/common/http";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// For Dialog
import { AddEntryDialog } from './doctor/doctor.component'
import { CheckStatusDoctor } from './doctor/doctor.component'
import { CheckStatusNurse } from './nurse/nurse.component'

/* Material Import */
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

/* Directives */
import { MaterialElevationDirective } from "./material/material-elevation.directive";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		routingComponents,

		// For Dialog
		AddEntryDialog,
		CheckStatusDoctor,
		CheckStatusNurse,

		/* Directives */
		MaterialElevationDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		HttpClientModule,

		/* Material Import */
		MaterialModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
