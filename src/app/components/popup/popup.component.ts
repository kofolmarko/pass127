import { Component } from '@angular/core';
import { HashService } from 'src/app/services/hash.service';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
	private password: string = '';

	constructor(private hashService: HashService) {}

	addPattern(pattern: any) {
		console.log(pattern)
	}

	getHashedValue(): void {
		this.password = this.hashService.hash('input params');
	}
}
