import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { TextgridComponent } from './components/textgrid/textgrid.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		PopupComponent,
		TextgridComponent,
		PatternComponent,
		SpotifyComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTooltipModule,
		ClipboardModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
