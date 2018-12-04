import { ResponseFormatEnum } from '../enums/api.enums';
import { NutrientReportSortEnum } from '../enums/nutrient-report.enums';

export interface ApiNutrientReportRequestInterface {
	api_key: string; //		y	n/a	Must be a data.gov registered API key
	fg?: string[]; //			n	""	limit your nutrients to one or more food groups by providing a list of food group ID's via the fg parameter. The default is a blank list meaning no food group filtering will be applied. Up to 10 food groups may be specified.
	format?: ResponseFormatEnum; //		n	JSON	Report format: xml or json
	max?: number; //		n	50	Number of rows to return. The maximum per request is 1,500.
	offset?: number; //		n	0	beginning row in the result set to begin
	nbno?: number; //		n	n/a	Report the nutrients for a single food identified by it's unique id -- nutrient number
	nutrients: number[]; //	y	n/a	a list of up to a maximum of 20 nutrient_id's to include in the report
	sort?: NutrientReportSortEnum; //		n	f	Sort the list of foods by (f)ood name or nutrient (c)ontent. If you are requesting more than one nutrient and specifying sort = c then the first nutrient in your list is used for the content sort.
	subset?: number; //		n	0	You may indicate all the foods in the SR database or an abridged list from the pull down menu. Set the subset parameter to 1 for the abridged list of about 1,000 foods commonly consumed in the U.S. The default 0 for all of the foods in the database
}