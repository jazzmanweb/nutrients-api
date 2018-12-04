import { DataSourceEnum } from '../enums/search.enums';

export interface SearchItemInterface {
	offset: number; //
	ndbno: string; // 	the food’s NDB Number
	name: string; //	the food’s name
	group: string; //	food group to which the food belongs
	ds: DataSourceEnum; //	Data source: BL=Branded Food Products or SR=Standard Release
	manu: string; //	The foods manufacturer
}