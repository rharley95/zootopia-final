import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficersComponent } from './officers/officers.component';
import { OfficerDetailComponent } from './officers/officer-detail/officer-detail.component';
import { OfficerEditComponent } from './officers/officer-edit/officer-edit.component';



const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/officers' },
    { path: 'officers', component: OfficersComponent, children: [
            { path: 'new', component: OfficerEditComponent },
            { path: ':id', component: OfficerDetailComponent },
            { path: ':id/edit', component: OfficerEditComponent },]
    }];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}