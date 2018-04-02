import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyReportsComponent } from './lazy-reports.component';
import { ReportsModule } from 'reports/dist/esm2015/reports.js';

@NgModule({
  declarations: [
    LazyReportsComponent,
  ],
  imports: [
    CommonModule,
    ReportsModule
  ],
  providers: [],
  exports: [LazyReportsComponent]
})
export class LazyReportsModule { }
