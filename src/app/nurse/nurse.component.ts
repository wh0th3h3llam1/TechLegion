import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-nurse',
	templateUrl: './nurse.component.html',
	styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  // For Card Elevation
	defaultElevation = 2;
	raisedElevation = 6;

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void { }

	openDialog():void
	{
		const dialogRef = this.dialog.open(CheckStatus);
	}
}

@Component({
	selector: 'checkStatus',
	templateUrl: 'checkStatus.html',
})

export class CheckStatus {}
