import { SearchSortEnum } from '../enums/search.enums';
import { SearchItemInterface } from './search-item.interface';

export interface SearchInterface {
	q: string; //	terms requested and used in the search
	sr: string; //	Standard Release version of the data being reported
	ds: string; //
	start: string; //	beginning item in the list
	end: string; //	last item in the list
	total: string; //	total # of items returned by the search
	sort: SearchSortEnum; //	requested sort order (r=relevance or n=name)
	item: SearchItemInterface[]; // individual items on the list
}