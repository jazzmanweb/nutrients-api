import { ResponseFormatEnum } from '../enums/api.enums';
import { FoodReportTypeEnum } from '../enums/food-report.enums';

export interface ApiFoodReportRequestInterface {
	api_key: string; //					y	n/a	Must be a data.gov registered API key
	ndbno: number; //					y	n/a	NDB no
	type?: FoodReportTypeEnum; //		n	b (basic)	Report type: [b]asic or [f]ull or [s]tats
	format?: ResponseFormatEnum; // 	n	Report format: xml or json
}
