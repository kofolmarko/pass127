import { Component } from '@angular/core';
import { HashService } from 'src/app/services/hash.service';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
	private pattern: string = '';
	private password: string = '';
	private gridInputs: string[] = [];
	private allModals = 1
	currentModal = 0;

	constructor(private hashService: HashService) {}

	addPattern(pattern: any) {
		const resPattern = this.hashService.processPattern(pattern);
		console.log(resPattern);
	}

	addTextGrid(gridInputs: string[]): void {
		console.log(gridInputs);
		this.gridInputs = gridInputs;
	}

	onChangeModal(next: boolean): void {
		if (next && this.currentModal < this.allModals) {
			this.currentModal++;
		}
		else if (!next && this.currentModal > 0) {
			this.currentModal--;
		}
	}

	getHashedValue(): void {
		this.password = this.hashService.hash('input params');
	}
}
