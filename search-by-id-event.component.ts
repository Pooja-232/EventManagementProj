import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { Eventc } from '../eventc';


@Component({
  selector: 'app-search-by-id-event',
  templateUrl: './search-by-id-event.component.html',
  styleUrls: ['./search-by-id-event.component.css']
})
export class SearchByIdEventComponent implements OnInit {

  eventid:number=0;
  eventname:string="";
  date:string="";
  location:string="";
  duration:string="";
  description:string="";
  amount:string="";
  contactnumber:string="";
  speakername:string="";
  speakeremail:string="";
  apicall: any;
  constructor() { }

  ngOnInit(): void {
  }


  search(event:any)
  {

this.eventid=event.eventID;
alert(this.eventid);
var eventc:Eventc=new Eventc();

 this.apicall.getbyid(this.eventid).subscribe((data: Eventc) => {
   eventc = data;
  console.log(eventc.eventid);
      console.log(eventc.eventname);
      console.log(eventc.date);
      console.log(eventc.location);
      console.log(eventc.duration);
      console.log(eventc.description);
      console.log(eventc.amount);
      console.log(eventc.contactnumber);
      console.log(eventc.speakername);
      console.log(eventc.speakeremail);
  
      this.eventid=eventc.eventid;
      this.eventname=eventc.eventname;
      this.date=eventc.date;
      this.location=eventc.location;
      this.duration=eventc.duration;
      this.description=eventc.description;
      this.amount=eventc.amount;
      this.contactnumber=eventc.contactnumber;
      this.speakername=eventc.speakername;
      this.speakeremail=eventc.speakeremail;
  // console.log(this.supplierdata);
});

  }
}

