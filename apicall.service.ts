import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventc } from './eventcrud/eventc';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  public API = 'https://localhost:44384/api/Suppliers/';
  public getAPI='https://localhost:44384/api/';
  //https://localhost:44384/api/suppliers/31
  

  // add(){}
  // save(){}
  
 public get():Observable<Array<Eventc>>{
    console.log('hello');
   
    return this.http.get<Array<Eventc>>(this.API);
    

  }
  getbyid(id:number):Observable<Eventc>  {
    
    
    console.log(id);
      //return this.http.get<Supplier>(this.API + '/' + {id});
      return this.http.get<Eventc>(this.getAPI + '/' + id);
  }

  postEventcData(event:Eventc)
  {
    let endPoints="/Eventc"
    this.http.post(this.getAPI + endPoints, Eventc).subscribe(data => {
      console.log(data);
    });
    alert("Done");
  }


  putEventcData(id:number,eventc:Eventc)
  {
    alert(Eventc.eventid);
    alert(Eventc.eventname);
    alert(Eventc.date);
    alert(Eventc.location);
    alert(Eventc.duration);
    alert(Eventc.description);
    alert(Eventc.amount);
    alert(Eventc.contactnumber);
    alert(Eventc.speakername);
    alert(Eventc.speakeremail);
   
    let endPoints="Eventc/" + id;
    //let endPoints="Suppliers/";
    this.http.put(this.getAPI + endPoints, Eventc).subscribe(data => {
      console.log(data);
    });
    alert("Done");

  }


  deleteEventc(id:number)
  {
    //alert(this.http.delete(this.API+id));
    // let myParams = new URLSearchParams();
    // myParams.append('id',parseInt(id));
    

   
    return this.http.delete(this.API + id).subscribe(data => {
      console.log(data);
    });

  }
}

