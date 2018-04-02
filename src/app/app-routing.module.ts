import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LazyReportsComponent } from './lazy-reports/lazy-reports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: LazyReportsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
