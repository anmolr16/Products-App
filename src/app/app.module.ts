import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatTableModule,
      MatSortModule,
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule,
      MatSelectModule,
      MatExpansionModule,
      MatTabsModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatButtonToggleModule,
      MatPaginatorModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatStepperModule,
      MatListModule,
      MatAutocompleteModule,
      MatRadioModule,
      MatDividerModule,
      MatChipsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressBarModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
