import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsModule, ReportsComponent } from 'reports/dist/esm2015/reports.js';

@NgModule({
  imports: [
    CommonModule,
    ReportsModule
  ],
  declarations: []
})
export class LazyReportsModule { }
