import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule,
  MatCardModule,
   MatToolbarModule,
     MatButtonModule,
     MatIconModule,
     MatListModule,
     MatMenuModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatStepperModule,
     MatRadioModule,
     MatDatepickerModule,
     MatSnackBarModule,

} from '@angular/material';

const materialComponent = [CommonModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDividerModule,
  MatToolbarModule
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    materialComponent
  ],
  exports: [materialComponent]
})
export class MaterialcompModule { }
