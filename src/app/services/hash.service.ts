import { Injectable } from '@angular/core';
// @ts-ignore
import seedrandom from 'seedrandom';


@Injectable({
	providedIn: 'root',
})
export class HashService {
	constructor() {}

	getInputLocations(inputs: string[]): number {
		var decimalIndex = 0;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i]!='') {
				decimalIndex += Math.pow(2, i);
				/* decimalIndex+=inputs[i].length; */
			}
		}
		/* decimalIndex=decimalIndex%256; */
		return decimalIndex;
	}

	processTextgrid(inputs: string[]): string {
		var decimalIndex = this.getInputLocations(inputs);
		console.log(decimalIndex);
		inputs = this.fillBlanks(inputs);

		const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",./\\<>?";
		const permutedChars = this.generatePasswordPermutations(decimalIndex);

		var nextShift = 1;
		var outStr = "";
		for (const input of inputs) {
			for (const char of input) {
				var permutedIdx = (permutedChars.indexOf(char) + nextShift + input.length) % allowedChars.length;
				var encodedChar = permutedChars[permutedIdx];
				nextShift = allowedChars.indexOf(encodedChar);
				outStr += encodedChar;
			}
		}
		return outStr;
	}

	fillBlanks(inputs: string[]): string[] {
		var blankInputs: string[]=['bLaNk', 'PrAzNo','VuOto', 'BlanKett', 'vIErGe', 'Gol', 'ToMt', 'blanCo'];
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i]!='')
				blankInputs[i]=inputs[i];
		}
		return blankInputs;
	}

	generatePasswordPermutations(idx : number ): string {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_-+={}[]|\\:;\"\'<>,.?/~`';

		const mixedStrings: string[] = [];
		const charactersArr = characters.split('');

		// Set the seed for the random number generator
		const seed = 127;
		const random = seedrandom(seed);

		while (mixedStrings.length < 256) {
			const shuffledArr = charactersArr.sort(() => random() - 0.5);
			const mixedString = shuffledArr.join('');
			mixedStrings.push(mixedString);
		}

		return mixedStrings[idx];
	}



	// implementirej funkcije k rabis
	hash(params: string): string {
		return 'capybara' + params;
	}
}
