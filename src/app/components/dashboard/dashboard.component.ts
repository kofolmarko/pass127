import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

	selectedParams: any[] = [];
	showPopup: boolean = false;

	constructor() {}

	items = [
		{ label: 'Pattern', checked: false },
		{ label: 'Text Grid', checked: false },
		{ label: 'Spotify', checked: false },
		{ label: 'Webpage URL', checked: false }
	];

	onShowPopup(): void {
		const checkedItems = this.items.filter(item => item.checked);
		this.selectedParams = checkedItems.map(item => item.label);
		this.showPopup = true;
		console.log(this.selectedParams)
	}

}
