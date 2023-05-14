import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HashService } from 'src/app/services/hash.service';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
	@Input() selectedParams: any[] = [];
	@Output() onClosePopup = new EventEmitter<void>();

	private pattern: string = '';
	private password: string = '';
	private gridInputs: string[] = [];
	activeModals: any[] = [];

	currentModalId: number = 0;
	currentModal = ''

	constructor(private hashService: HashService) {}

	ngOnInit(): void {
		console.log(this.selectedParams)
		if (this.selectedParams.length > 0) {
			this.currentModal = this.selectedParams[0];
		}
	}

	onClose(): void {
		this.onClosePopup.emit();
	}

	isParam(label: string): boolean {
		return this.selectedParams.includes(label);
	}

	addPattern(pattern: any) {
		this.pattern = pattern;
	}

	addTextGrid(gridInputs: string[]): void {
		console.log(gridInputs);
		this.gridInputs = gridInputs;
	}

	onChangeModal(next: boolean): void {
		if (next) {
			this.currentModalId++;
		} else {
			this.currentModalId--;
		}
		this.currentModal = this.selectedParams[this.currentModalId];
	}

	getHashedValue(): void {
		if (this.selectedParams.includes('Pattern')) {
			this.password += this.hashService.processPattern(this.pattern);
		}
		if (this.selectedParams.includes('Text Grid')) {
			this.password += this.hashService.processTextgrid(this.gridInputs);
		}
		console.log(this.password);
		this.onClose();
	}
}
