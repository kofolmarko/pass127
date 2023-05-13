import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-textgrid',
	templateUrl: './textgrid.component.html',
	styleUrls: ['./textgrid.component.scss'],
})
export class TextgridComponent {
	inputFields: string[] = ['', '', '', '', '', '', '', ''];

	@Output() onComplete = new EventEmitter<string[]>();

	logInputs() {
		this.onComplete.emit(this.inputFields);
	}
}
