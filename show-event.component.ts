import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { Eventc } from '../eventc';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

    eventcdata: Array<Eventc>=[];
    constructor(private apicall:ApicallService) { 
  
    }
  
    ngOnInit(): void {
     
  
    }
  
    showlist()
    {
  
      this.apicall.get().subscribe(data => {
        this.eventcdata = data;
        // console.log(this.supplierdata);
      });
    }
  }