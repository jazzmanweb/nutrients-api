import { FoodReportTypeEnum } from '../enums/food-report.enums';
import { FoodInterface } from './food.interface';
import { FoodnoteInterface } from './foodnote.interface';
import { LangualInterface } from './langual.interface';
import { SourceInterface } from './source.interface';

export interface FoodReportInterface {
	type: FoodReportTypeEnum;
	sr: string;
	food: FoodInterface;
	sources: SourceInterface[]; // reference source, usually a bibliographic citation, for the food
	foodnotes: FoodnoteInterface[];
	langual: LangualInterface[]; // LANGUAL codes assigned to the food
}
