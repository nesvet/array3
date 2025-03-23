export class Array3<I> extends Array<I> {
	
	static get [Symbol.species]() {
		return Array;
	}
	
	toPlainArray() {
		return Array.from(this);
	}
	
}
