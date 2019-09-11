import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BoxService } from './shared/box.service';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { RecentBoxOpeningsComponent } from './details-view/components/recent-box-openings.component';
import { BoxItemsComponent } from './details-view/components/box-items.component';
import { BoxMetaComponent } from './details-view/components/box-meta.component';
import { DetailsViewComponent } from './details-view/components/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    BoxMetaComponent,
    RecentBoxOpeningsComponent,
    BoxItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    ScrollingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    BoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
