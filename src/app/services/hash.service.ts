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
}
