import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

const material = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  FormsModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatMomentDateModule,
  CdkAccordionModule,
  MatDialogModule,
  MatMenuModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material],
})
export class MaterialModule {}
