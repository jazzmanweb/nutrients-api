import { MeasureInterface } from './measure.interface';

export interface NutrientInterface {
	nutrient_id: number; // 	nutrient number (nutrient_no) for the nutrient
	name: string; // 	nutrient name
	group: string;
	sourcecode: number[]; //	list of source id's in the sources list referenced for this nutrient
	unit: string; //	unit of measure for this nutrient
	value: number; //	100 g equivalent value of the nutrient
	dp: number; //	# of data points
	se: string; //	standard error
	derivation: string; //	Indicator of how the value was derived
	measures: MeasureInterface[]; // list of measures reported for a nutrient
}