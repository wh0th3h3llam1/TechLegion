import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReadJSONService } from '../services/read-json.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fileData: any;
  
  constructor(private router: Router, private readJSON: ReadJSONService){
		this.readJSON.getJSON("team").subscribe(data => {
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

}
