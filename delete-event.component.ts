import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';



@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  eventID:number=0;
  constructor(private apicall:ApicallService) { }

  ngOnInit(): void {
  }

  btnclick(event:any)
  {
  
    this.eventID=event.eventID;
this.apicall.deleteEventc(this.eventID);

  }

}
