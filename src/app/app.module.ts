import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfficersComponent } from './officers/officers.component';
import { OfficerListComponent } from './officers/officer-list/officer-list.component';
import { OfficerDetailComponent } from './officers/officer-detail/officer-detail.component';
import { HeaderComponent } from './header/header.component';
import { CasesComponent } from './cases/cases.component';
import { CaseListComponent } from './cases/case-list/case-list.component';
import { OfficerItemComponent } from './officers/officer-item/officer-item.component';
import { CaseDetailComponent } from './cases/case-detail/case-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './shared/dropdown.directive';
import { OfficerEditComponent } from './officers/officer-edit/officer-edit.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OfficersComponent,
    OfficerListComponent,
    OfficerDetailComponent,
    HeaderComponent,
    CasesComponent,
    CaseListComponent,
    OfficerItemComponent,
    CaseDetailComponent,
    DropdownDirective,
    OfficerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
