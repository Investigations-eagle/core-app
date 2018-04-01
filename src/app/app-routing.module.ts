import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ɵa as ReportsComponent} from 'reports/dist/esm2015/reports';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'reports',
    component: ReportsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
