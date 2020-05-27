import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ReadJSONService {

	filePath: string = "../../assets/data.json";

	constructor(private httpClient: HttpClient){}

	public getJSON(): Observable<any>
	{
		// return this.httpClient.get("../../assets/files/product-lists/antibiotics.json");
		return this.httpClient.get(this.filePath);
	}
}
