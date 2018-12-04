import { NutrientInterface } from './nutrient.interface';

export interface FoodLightInterface {
	ndbno: string; //	NDB food number
	name: string; //	food name
	weight: number;
	measure: string;
	nutrients: NutrientInterface[]; // 	metadata elements for each nutrient included in the food report
}