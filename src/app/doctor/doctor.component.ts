import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ReadJSONService } from "../services/read-json.service";
import { Inject } from '@angular/core';

declare var _: any; 

@Component({
	selector: 'app-doctor',
	templateUrl: './doctor.component.html',
	styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit {

	// For Card Elevation
	defaultElevation = 2;
	raisedElevation = 6;

	fileData: any;

	constructor(public dialog: MatDialog, private router: Router, private readJSON: ReadJSONService){
		this.readJSON.getJSON().subscribe(data => {
			this.fileData = data;
			// console.log(this.fileData);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit(): void {
	}

	filterById(id)
	{
		return this.fileData.filter(function(fileData)
		{
			return (fileData['room_no'] == id);
		})[0];
	}

	openDialog(event):void
	{
		// To get ID of the element
		let target = event.target.attributes.id || event.srcElement.attributes.id || event.currentTarget.attributes.id;
		console.log(event);
		let value = target.nodeValue;
		
		// Specifically for FireFox
		// let target = event.target || event.srcElement;
		// let idAttr = target.attributes.id;
		// let value = idAttr.nodeValue;

		this.dialog.open(CheckStatusDoctor, {"data" : this.filterById(value)});
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

export interface PersonDetails
{
	room_no: number,
	name: string,
	age: number,
	blood_grp: string,
	drip_status: number
}

@Component({
	selector: 'checkStatusDoctor',
	templateUrl: 'checkStatusDoctor.html',
})

export class CheckStatusDoctor {
	// public dialogRef: MatDialogRef<CheckStatusDoctor>
	constructor(@Inject(MAT_DIALOG_DATA) public data : PersonDetails){}
}


@Component({
	selector: 'addEntryDialog',
	templateUrl: 'addEntryDialog.html',
})

export class AddEntryDialog {
	bloodGroup: string[] = ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"];
}
