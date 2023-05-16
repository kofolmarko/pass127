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
		let random = seedrandom(seed);

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

	processPattern(inputStr: string): string {
		if (inputStr === '') return inputStr;
		const charGrid: Array<Array<Array<string>>> =
		[
			[	['W', '$', 'D'],
				['s', 'z', 'h'],
				['o', 'G', 'b']
			],
			[	['C', 'W', 'q'],
				['x', 'v', 'w'],
				['U', 'S', 'K']
			],
			[	['O', 'H', 'U'],
				['R', 'q', 'm'],
				['E', '.', 'K']
			],
			[	['i', '&', 'L'],
				['Q', '&', 'f'],
				['2', 'y', 'r']
			],
			[	['w', 'Q', '5'],
				['e', 'j', '?'],
				['3', '/', 'R']
			],
			[	['p', 'F', 'Y'],
				['^', 'r', 'I'],
				['$', 'v', 'X']
			],
			[	['y', '.', 'z'],
				['T', 'I', 'V'],
				['J', 'O', 'J']
			],
			[	['m', 'a', '@'],
				['Z', 'N', 'l'],
				['o', 'i', 'j']
			],
			[	['5', 'g', 'L'],
				['!', 'k', '7'],
				['%', 'P', 'F']
			]
		];

		const charX: Array<Array<string>> =
		[
			['u', 'H', 'I'],
			['5', '?', 'c'],
			['$', 'r', 'W'],
			['.', 'S', 'W'],
			['O', 'y', '%'],
			['L', '/', '$'],
			['f', 'n', 't'],
			['E', 'q', 'N'],
			['u', '/', 'Z']
		];

		const charY: Array<Array<string>> =
		[
			['M', 'G', '^'],
			['T', '3', '9'],
			['b', 's', 'B'],
			['$', 'S', 'Y'],
			['Z', 'm', 'K'],
			['F', 'O', 'j'],
			['u', 'l', '/'],
			['e', 'g', 'i'],
			['c', '!', 'K']
		];

		let outStr = '';
		const steps = inputStr.split('-');
		let stepI = 0;
		for (const step of steps) {
			const x = (parseInt(step)-1)%3+1;
			const y = Math.ceil(parseInt(step)/3);
			outStr += charX[stepI][x - 1] + charY[stepI][y - 1] + charGrid[stepI][y - 1][x - 1];
			stepI++;
		}
		return outStr;
	}
}
