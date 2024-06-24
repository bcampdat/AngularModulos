import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { RecetasModule } from './recetas/recetas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    RecetasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
