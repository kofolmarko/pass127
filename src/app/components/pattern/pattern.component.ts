import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-pattern',
	templateUrl: './pattern.component.html',
	styleUrls: ['./pattern.component.scss'],
})
export class PatternComponent {
	rows = [0, 1, 2];
	cols = [0, 1, 2];
	isMouseDown = false;
	selectedCells: number[] = [];

	@Output() onComplete = new EventEmitter<string>();

	onCellDown(row: number, col: number): void {
		this.isMouseDown = true;
		this.selectedCells = [this.getCellNumber(row, col)];
	}

	onCellEnter(row: number, col: number): void {
		if (this.isMouseDown) {
			const cellNumber = this.getCellNumber(row, col);
			if (!this.selectedCells.includes(cellNumber)) {
				this.selectedCells.push(cellNumber);
			}
		}
	}

	onCellUp(): void {
		this.isMouseDown = false;
		this.onComplete.emit(this.selectedCells.join('-'));
		this.selectedCells = [];
	}

	isSelected(row: number, col: number): boolean {
		return this.selectedCells.includes(this.getCellNumber(row, col));
	}

	getCellNumber(row: number, col: number): number {
		return row * 3 + col + 1;
	}
}
