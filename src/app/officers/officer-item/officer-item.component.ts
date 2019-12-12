import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Officer } from '../officer.model';
import { OfficerService } from '../officer.service';

@Component({
  selector: 'app-officer-item',
  templateUrl: './officer-item.component.html',
  styleUrls: ['./officer-item.component.css']
})
export class OfficerItemComponent implements OnInit {

  @Input() officer: Officer;



  constructor( private officerService: OfficerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.officerService.officerSelected.emit(this.officer);
  }

}
