import { Component, OnInit, Input } from '@angular/core';
import { Officer } from '../officer.model';
import { OfficerService } from '../officer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-officer-detail',
  templateUrl: './officer-detail.component.html',
  styleUrls: ['./officer-detail.component.css']
})
export class OfficerDetailComponent implements OnInit {
  @Input() officer: Officer;
  id: number;

  constructor( private officerService: OfficerService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.officer = this.officerService.getOfficer(params['id']);
    });
  }

  onDelete() {
    this.officerService.deleteOfficer(this.officer);
    this.router.navigate(['/officers']);
  }

}
