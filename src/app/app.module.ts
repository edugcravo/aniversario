import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { routing } from './app.routing';
 // Import the SlickCarouselModule from the correct package



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,

    ],
    imports: [
        BrowserModule,
        routing,
        HttpClientModule,

        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    providers: [

  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
