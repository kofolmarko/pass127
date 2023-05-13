import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

	showPopup: boolean = false;

	constructor() {}

	items = [
		{ label: 'Pattern', checked: false },
		{ label: 'Grid text', checked: true },
		{ label: 'AI Image', checked: false },
		{ label: 'Spotify', checked: true },
		{ label: 'Webpage URL', checked: false }
	  ];


	selectedItems = this.items.filter((item) => item.checked);

	openDialog(): void {
		// const dialogRef = this.dialog.open(PopupComponent, {
		//   width: '100%',
		//   height: '100%'
		// });
	}
}
