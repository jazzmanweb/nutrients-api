import { ResponseFormatEnum } from '../enums/api.enums';
import { SearchSortEnum } from '../enums/search.enums';

export interface ApiSearchRequestInterface {
	api_key: string; //			y	n/a	Must be a data.gov registered API key
	q?: string; //				n	""	Search terms
	ds?: string; //				n	""	Data source. Must be either 'Branded Food Products' or 'Standard Reference'
	fg?: string; //				n	""	Food group ID
	sort?: SearchSortEnum; //	n	r	Sort the results by food name (n) or by search relevance (r)
	max?: number; //				n	50	maximum rows to return
	offset?: number; //			n	0	beginning row in the result set to begin
	format?: ResponseFormatEnum; //	n	JSON 	results format: json or xml
}