import { NgModule } from '@angular/core';
import { LazyReportsComponent } from './lazy-reports.component';
import { ReportsModule } from 'reports/dist/esm2015/reports';

@NgModule({
  declarations: [
    LazyReportsComponent,
  ],
  imports: [
    ReportsModule
  ],
})
export class LazyReportsModule { }
