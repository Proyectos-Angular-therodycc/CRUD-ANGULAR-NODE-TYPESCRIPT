import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavigationComponent,
    TableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavigationComponent,
    TableComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
