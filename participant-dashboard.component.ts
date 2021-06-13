import { Component, OnInit } from '@angular/core';
import { Participantdb } from '../participantdb';


@Component({
  selector: 'app-participant-dashboard',
  templateUrl: './participant-dashboard.component.html',
  styleUrls: ['./participant-dashboard.component.css']
})
export class ParticipantDashboardComponent implements OnInit {

  participant:Participantdb;
  constructor() {
    this.participant = localStorage.getItem('participant')? JSON.parse(localStorage.getItem('participant') || '{}'):[];
   }

  ngOnInit(): void {
  }

}
