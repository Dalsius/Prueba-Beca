import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaComponent } from './components/main/tabla/tabla.component';
import { GaleriaComponent } from './components/main/galeria/galeria.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CambiarcontentComponent } from './components/main/cambiarcontent/cambiarcontent.component';
import { FiltrarComponent } from './components/main/filtrar/filtrar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    GaleriaComponent,
    MenuComponent,
    CambiarcontentComponent,
    FiltrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
