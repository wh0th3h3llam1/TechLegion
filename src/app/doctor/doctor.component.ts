import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-doctor',
	templateUrl: './doctor.component.html',
	styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit {

	// For Card Elevation
	defaultElevation = 2;
	raisedElevation = 6;

	constructor(public dialog: MatDialog, private router: Router) { }

	ngOnInit(): void { }

	openDialog():void
	{
		const dialogRef = this.dialog.open(CheckStatusDialog);
	}

	addEntry():void
	{
		const dialogRef = this.dialog.open(AddEntryDialog);
	}

	logout():void
	{
		this.router.navigate(['/']);
	}
}

@Component({
	selector: 'checkStatusDialog',
	templateUrl: 'checkStatusDialog.html',
})

export class CheckStatusDialog {}

@Component({
	selector: 'addEntryDialog',
	templateUrl: 'addEntryDialog.html',
})

export class AddEntryDialog {}

