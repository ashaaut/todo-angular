import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//load es6 module

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //register component/directives and pipes
    AppComponent
  ],
  imports: [ //helper modules or utility or dependancy module
    BrowserModule,FormsModule
  ],
  providers: [], //register and launch services
  bootstrap: [AppComponent] //load components
})
export class AppModule { }
