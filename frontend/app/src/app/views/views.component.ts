import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent {
  val:any 
  constructor(private _http:HttpClient) {
    this._http.get("http://localhost:3000/getData").subscribe((res) => {
    this.val=res
    })
  }
}
