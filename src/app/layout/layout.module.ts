import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    MaterialModule,
  ],
  exports:[
  ],
  providers:[]
})
export class LayoutModule { }
