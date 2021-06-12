import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApicallService } from 'src/app/apicall.service';
import { Eventc } from '../eventc';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

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

  edit(eventID:any)
  {
    
    //this.suppID=event.suppID;
    var eventc:Eventc=new Eventc();

    this.apicall.getbyid(this.eventid).subscribe(data => {
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

 savechanges(data:any)
{
  var eventc=new Eventc();
  eventc.eventid=data.eventid;
  eventc.eventname=data.eventname;
  eventc.date=data.date;
  eventc.location=data.location;
  eventc.description=data.duration;
  eventc.description=data.description;
  eventc.amount=data.amount;
  eventc.contactnumber=data.contactnumber;
  eventc.speakeremail=data.speakername;
  eventc.speakeremail=data.speakeremail;
  
alert(eventc.eventid);
alert(eventc.eventname);
alert(eventc.date);
alert(eventc.location);
alert(eventc.duration);
alert(eventc.description);
alert(eventc.amount);
alert(eventc.contactnumber);
alert(eventc.speakername);
alert(eventc.speakeremail);


this.apicall.putEventcData(eventc.eventid,eventc);
}
}


