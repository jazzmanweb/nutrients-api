import { ListTypeEnum, ListSortEnum } from '../enums/list.enums';
import { ResponseFormatEnum } from '../enums/api.enums';

export interface ApiListRequestInterface {
	api_key: string; //				y	n/a	Must be a data.gov registered API key
	lt?: ListTypeEnum; // 			n	f list type(lt): d = derivation codes, f = food , n = all nutrients, ns = speciality nutrients, nr = standard release nutrients only,g = food group
	max?: number; // 				n	50	maximum number of items to return
	offset?: number; // 			n	0	beginning item in the result set
	sort?: ListSortEnum; // 		n	n	sort order: n=name or id (Meaning of id varies by list type: nutrient number for a nutrient list, NDBno for a foods list ,food group id for a food group list
	format?: ResponseFormatEnum; // n	JSON	report format: JSON or XML
}
