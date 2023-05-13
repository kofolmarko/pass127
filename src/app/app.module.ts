import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextgridComponent } from './components/textgrid/textgrid.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { SpotifyComponent } from './components/spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PopupComponent,
    TextgridComponent,
    PatternComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
 BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
