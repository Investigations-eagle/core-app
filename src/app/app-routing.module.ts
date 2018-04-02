import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { LazyReportsModule } from './lazy-reports/lazy-reports.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'reports',
    loadChildren: './lazy-reports/lazy-reports.module#LazyReportsModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
