import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotedComponent } from './quoted/quoted.component';
import { QuotedInDetailComponent } from './quoted-in-detail/quoted-in-detail.component';
import { HashesDirective } from './hashes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotedComponent,
    QuotedInDetailComponent,
    HashesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
