import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
   constructor(private _http:HttpClient, private _router:Router){

  }


  postResponse(fn:any,ln:any,md:any,pno:any,dob:any,gnd:any,adl1:any,adl2:any,city:any,st:any,pcode:any,cntry:any){
    const data ={
      fname:fn,
      lname:ln,
      md:md,
      pno:pno,
      dob:dob,
      gnd:gnd,
      adl1:adl1,
      adl2:adl2,
      city:city,
      pcode:pcode,
      cntry:cntry

    }
    this._http.post<any>("https://localhost:3000/addNew",data).subscribe((val) => {
      console.log(val);
      this._router.navigateByUrl('/view')
    })
  }
}
