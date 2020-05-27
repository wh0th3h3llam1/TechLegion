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
		this.readJSON.getJSON().subscribe(data => {
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
		// var target = event.target || event.srcElement || event.currentTarget;
		
		// Specifically for FireFox
		var target = event.target || event.srcElement;
		var idAttr = target.attributes.id;
		var value = idAttr.nodeValue;

		this.dialog.open(CheckStatus, {"data" : this.filterById(value)});
	}
}

@Component({
	selector: 'checkStatus',
	templateUrl: 'checkStatus.html',
})

export class CheckStatus {
	constructor(@Inject(MAT_DIALOG_DATA) public data : PersonDetails){}
}
