export interface MeasureInterface {
	label: string; //	name of the measure, e.g. "large"
	eqv: 132; // 	equivalent of the measure expressed as an eunit
	eunit: string; //	Unit in with the equivalent amount is expressed. Usually either gram (g) or milliliter (ml)
	qty: number;
	value: string; // 	gram equivalent value of the measure
}