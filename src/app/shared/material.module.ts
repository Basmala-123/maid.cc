import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from "@angular/material/select";
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatProgressBarModule,
  MatTabsModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatExpansionModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[
    materialModules
  ]
})
export class MaterialModule { }
