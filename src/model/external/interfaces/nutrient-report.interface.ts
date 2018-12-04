import { FoodLightInterface } from './food-light.interface';

export interface NutrientReportInterface {
	sr: string;
	groups: string; //	If applicable, the list of food groups used to filter the report
	subset: string; //	The name of the subset of foods in the response or all foods
	start: number;
	end: number;
	total: number;
	foods: FoodLightInterface[]
}