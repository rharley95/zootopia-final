import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Officer } from '../officer.model';
import { OfficerService } from '../officer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.css']
})
export class OfficerListComponent implements OnInit {


  officers: Officer[];
  subscription: Subscription;
  term: string;

  constructor( private officerService: OfficerService ) { }

  ngOnInit() {
    this.officerService.getOfficers();
    this.officerService.officerChangedEvent.subscribe((officers) => {
    this.officers = officers.slice();
    });
    this.subscription = this.officerService.officerListChangedEvent.subscribe((officers: Officer[]) => {
      this.officers = officers;
    });
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
