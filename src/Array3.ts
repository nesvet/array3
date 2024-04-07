export class Array3 extends Array {
	// constructor(...args) {
	// 	super(...args);
	
	// 	console.log("⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️⭕️");
	
	// }
	
	concat<I>(...args: any[]): I[] {
		
		const { length } = this;
		
		const array = new Array(length);
		
		for (let i = 0; i < length; i++)
			array[i] = this[i];
		
		for (const arg of args)
			if (Array.isArray(arg))
				array.push(...arg);
			else
				array.push(arg);
		
		return array;
	}
	
	// copyWithin(...args) {
	// 	return super.copyWithin(...args);
	// }
	
	filter<I>(callbackfn: (value: any, index: number, array: any[]) => I, thisArg?: any): I[] {
		
		const filtered = [];
		
		for (let i = 0, { length } = this; i < length; i++) {
			const item = this[i];
			if (callbackfn.call(thisArg, item, i, this))
				filtered.push(item);
		}
		
		return filtered;
	}
	
	// flat(...args) {
	// 	return super.flat(...args);
	// }
	
	// flatMap(...args) {
	// 	return super.flatMap(...args);
	// }
	
	map<I>(callbackfn: (value: any, index: number, array: any[]) => I, thisArg?: any): I[] {
		
		const { length } = this;
		
		const mapped = new Array(length);
		
		for (let i = 0; i < length; i++)
			mapped[i] = callbackfn.call(thisArg, this[i], i, this);
		
		return mapped;
	}
	
	slice<I>(start = 0, end?: number): I[] {
		
		const { length } = this;
		
		if (start < 0)
			if (start < -length)
				start = 0;
			else
				start += length;
		 else if (start > length)
			return [];
		
		if (end === undefined || end > length)
			end = length;
		else if (end < 0)
			if (end < -length)
				end = 0;
			else
				end += length;
		
		
		if (end <= start)
			return [];
		
		const sliced = new Array(end - start);
		
		for (let i = start; i < end; i++)
			sliced[i - start] = this[i];
		
		return sliced;
	}
	
	toPlainArray<I>(): I[] {
		
		const { length } = this;
		
		const array = new Array(length);
		
		for (let i = 0; i < length; i++)
			array[i] = this[i];
		
		return array;
	}
	
	splice<I>(start = 0, deleteCount = 0, ...items: I[]): I[] {
		
		const { length } = this;
		
		if (start < 0)
			if (start < -length)
				start = 0;
			else
				start += length;
		 else if (start > length)
			start = length;
		
		const deleted = [];
		
		if (deleteCount < 0)
			deleteCount = 0;
		else if (!isFinite(deleteCount))
			deleteCount = length - start;
		
		for (let i = 0; i < deleteCount; i++)
			deleted[i] = this[start + i];
		
		const shift = items.length - deleteCount;
		
		if (shift)
			if (shift > 0)
				for (let i = length - 1; i >= start; i--)
					this[i + shift] = this[i];
			else {
				for (let i = start - shift; i < length; i++)
					this[i + shift] = this[i];
				this.length += shift;
			}
		
		for (let i = 0; i < items.length; i++)
			this[start + i] = items[i];
		
		return deleted;
	}
	
}
