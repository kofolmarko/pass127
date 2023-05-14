import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HashService {
	constructor() {}

	// implementirej funkcije k rabis
	hash(params: string): string {
		return 'capybara' + params;
	}

	processPattern(inputStr: string): string {
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
