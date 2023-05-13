import { Component } from '@angular/core';

@Component({
	selector: 'app-textgrid',
	templateUrl: './textgrid.component.html',
	styleUrls: ['./textgrid.component.scss'],
})
export class TextgridComponent {
	inputFields: string[] = ['', '', '', '', '', '', '', ''];

  logInputs() {
    console.log(this.inputFields);
  }
}
