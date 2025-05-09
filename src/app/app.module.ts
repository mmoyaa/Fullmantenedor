import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Probando2Component } from './modulos/probando2/probando2.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


import { MatPaginatorModule } from '@angular/material/paginator';  
import { MatSortModule } from '@angular/material/sort';  
import { provideImageKitLoader } from '@angular/common';
import { ProbandomodalComponent } from './modulos/probandomodal/probandomodal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Probando3Component } from './modulos/probando3/probando3.component';
import { Probando4Component } from './modulos/probando4/probando4.component';
import { Probando5Component } from './modulos/probando5/probando5.component';
import { Probando6Component } from './modulos/probando6/probando6.component';

import { MainComponent } from './components/main/main.component';
import { ModuloComponent } from './components/modulo/modulo.component';

import { Probando7Component } from './modulos/probando7/probando7.component';
import { Probando8Component } from './modulos/probando8/probando8.component';
import { SectorComponent } from './modulos/sector/sector.component';
import { Probando10Component } from './modulos/probando10/probando10.component';


@NgModule({
  declarations: [
    AppComponent,
    Probando2Component,
     Probando5Component,
    Probando6Component,
    ProbandomodalComponent,
    Probando3Component,
    Probando4Component,
    Probando5Component,
    Probando6Component,
    MainComponent,
    ModuloComponent,

    Probando7Component,
      Probando8Component,
      SectorComponent,
      Probando10Component,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatTableModule, NgbModule,  HttpClientModule,MatSortModule,MatPaginatorModule,      // Asegúrate de agregar MatTableModule
    ReactiveFormsModule,HttpClientModule,FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
