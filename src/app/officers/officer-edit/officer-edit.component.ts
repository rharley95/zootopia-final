import { Component, OnInit } from '@angular/core';
import { Officer } from '../officer.model';
import { OfficerService } from '../officer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-officer-edit',
  templateUrl: './officer-edit.component.html',
  styleUrls: ['./officer-edit.component.css']
})
export class OfficerEditComponent implements OnInit {

  officer: Officer = null;
  editMode: boolean = false;
  originalOfficer: Officer;

  constructor(private officerService: OfficerService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editMode = false;
      let id = params['id'];
      if (!id) {
        return;
      }

      let officer = this.officerService.getOfficer(id);
      if (!officer) {
        return;
      }

      this.originalOfficer = officer;
      this.editMode = true;
      this.officer = JSON.parse(JSON.stringify(officer));
  });

}

onSubmit(form: NgForm) {
  let officer = new Officer(
    form.value.id,
    form.value.name,
    form.value.description,
    form.value.email,
    form.value.phone,
    form.value.img
  );
  if (this.editMode === true) {
    this.officerService.updateOfficer(this.originalOfficer, officer);
  } else {
    this.officerService.addOfficer(officer);
  }

  this.router.navigate(['/officers']);
}

onCancel() {
  this.router.navigate(['/officers']);
}

isInvalidOfficer(newOfficer: Officer) {
  if (!newOfficer) {
    return true;
  }

  if (this.officer && newOfficer.id === this.officer.id) {
    return true;
  }

  return false;
}
}
