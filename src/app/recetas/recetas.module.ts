import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRecetasComponent } from './consulta-recetas/consulta-recetas.component';
import { RecetasService } from './recetas.service';



@NgModule({
  declarations: [
    ConsultaRecetasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [RecetasService],
})
export class RecetasModule { }
