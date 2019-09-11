import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsViewComponent } from './details-view/components/details-view.component';
import { BoxMetaComponent } from './details-view/components/box-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    BoxMetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
