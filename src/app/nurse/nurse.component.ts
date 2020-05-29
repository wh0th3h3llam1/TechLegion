import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReadJSONService } from '../services/read-json.service';
import { PersonDetails } from '../doctor/doctor.component';

@Component({
	selector: 'app-nurse',
	templateUrl: './nurse.component.html',
	styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  // For Card Elevation
	defaultElevation = 2;
	raisedElevation = 6;
	fileData: any;

	constructor(public dialog: MatDialog, private router: Router, private readJSON: ReadJSONService){
		this.readJSON.getJSON("data").subscribe(data => {
			this.fileData = data;
			// console.log(this.fileData);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	ngOnInit(): void { }

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

		this.dialog.open(CheckStatusNurse, {"data" : this.filterById(value)});
	}
}

@Component({
	selector: 'checkStatusNurse',
	templateUrl: 'checkStatusNurse.html',
})

export class CheckStatusNurse {
	constructor(@Inject(MAT_DIALOG_DATA) public data : PersonDetails){}
}
