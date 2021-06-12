import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Eventc } from '../eventc';
import { ApicallService } from 'src/app/apicall.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

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

  constructor(private apicall:ApicallService) { }

  ngOnInit(): void {
  }

  add(event:any)
{
  var eventc:Eventc=new Eventc();
  eventc.eventid=event.eventID;
  eventc.eventname=event.eventname;
  eventc.date=event.date;
  eventc.location=event.location;
  eventc.duration=event.duration;
  eventc.description=event.description;
  eventc.amount=event.amount;
  eventc.contactnumber=event.contactnumber;
  eventc.speakername=event.speakername;
  eventc.speakeremail=event.speakeremail;
  this.apicall.postEventcData(eventc);

}

}


