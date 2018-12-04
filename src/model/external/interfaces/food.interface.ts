import { NutrientInterface } from './nutrient.interface';
import { IngridientInterface } from './ingredient.interface';

export interface FoodInterface {
	ndbno: string; //	NDB food number
	name: string; //	food name
	sd: string; //	short description
	group: string; // 	food group
	sn: string; //	scientific name
	cn: string; // 	commercial name
	manu: string; // 	manufacturer
	nf: number; //	nitrogen to protein conversion factor
	cf: number; //	carbohydrate factor
	ff: number; //	fat factor
	pf: number; //	protein factor
	r: string; //	refuse %
	rd: string; //	refuse description
	ds: string; //	database source: 'Branded Food Products' or 'Standard Reference'
	ru: string; //	reporting unit: nutrient values are reported in this unit, usually gram (g) or milliliter (ml)
	ing?: IngridientInterface; // 	ingredients (Branded Food Products report only)
	nutrients: NutrientInterface[]; // 	metadata elements for each nutrient included in the food report
}