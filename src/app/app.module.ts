import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { RecetasModule } from './recetas/recetas.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InicioModule,
    RecetasModule,
    HttpClientModule,
    SharedModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
