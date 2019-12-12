import { Component, OnInit } from '@angular/core';
import { Officer } from './officer.model';
import { OfficerService } from './officer.service';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css'],
  providers: [OfficerService]
})
export class OfficersComponent implements OnInit {

  selectedOfficer: Officer;

  constructor( private officerService: OfficerService ) { }

  ngOnInit() {
    this.officerService.officerSelected.subscribe(
      (officer: Officer) => {
        this.selectedOfficer = officer;
      });
  }

}
