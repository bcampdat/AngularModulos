import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRecetasComponent } from './consulta-recetas/consulta-recetas.component';
import { FormsModule, NgForm } from '@angular/forms';




@NgModule({
  declarations: [
    ConsultaRecetasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // providers: [RecetasService],
})
export class RecetasModule { }
