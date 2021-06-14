import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';


@Component({
  selector: 'app-update-speaker',
  templateUrl: './update-speaker.component.html',
  styleUrls: ['./update-speaker.component.css']
})
export class UpdateSpeakerComponent implements OnInit {

 
  data:any=[]
  constructor(private http : HttpClient,private apicallService:ApicallService) { }
  speakerid:string="";
  speakername:string="";
  password:string="";
  skills:string="";
  contactnumber:string="";

  ngOnInit(): void {
  }
  search()
  {
    
    //this.suppID=event.suppID;
    var speaker=new Speaker();

    this.apicallService.getbyid(this.speakerid).subscribe(data => {
      this.data = data;
    console.log(this.data);
    this.speakerid=this.data.speakerid;
    this.speakername=this.data.speakername;
    this.password=this.data.password;
    this.skills=this.data.skills;
    this.contactnumber=this.data.contactnumber;
    
      // console.log(this.supplierdata);
    });

}

savechanges(event:any)
{
  var sp=new Speaker();
  sp.speakerid=event.speakerid;
  sp.speakername=event.speakername;
  sp.password=event.password;
  sp.skills=event.skills;
  sp.contactnumber=event.contactnumber
  
// alert(supplier.SupplierID);
// alert(supplier.ContactName);
// alert(supplier.CompanyName);

this.apicallService.putspeakerData(this.speakerid,sp);


}


}
export class Speaker{
  speakerid:number=0;
  speakername:string="";
  password:string="";
  skills:string="";
  contactnumber:string="";

}
