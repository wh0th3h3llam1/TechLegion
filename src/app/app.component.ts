import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Tech Legion';

	constructor(private matIconRegistry: MatIconRegistry,
				private domSanitizer: DomSanitizer)
	{
		// For Custom mat-icon
		// Usage : <mat-icon svgIcon="name"></mat-icon>
		this.matIconRegistry.addSvgIcon(
			"innovation",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/innovation.svg")
		);

		this.matIconRegistry.addSvgIcon(
			"bolt",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/bolt.svg")
		);
		
		this.matIconRegistry.addSvgIcon(
			"drip1",
			this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/intravenous-saline-drip1.svg")
		);
	}
}
