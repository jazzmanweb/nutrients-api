import { MeasureInterface } from './measure.interface';

export interface NutrientInterface {
	nutrient_id: number; // 	nutrient number (nutrient_no) for the nutrient
	nutrient: string; // 	Description of the nutrient
	unit: string; //	Unit in which the nutrient value is expressed
	value: string; //	Value of the nutrient for this food
	gm: number; // 		The 100 gram equivalent value for the nutrient
}