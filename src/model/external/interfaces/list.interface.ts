import { ListTypeEnum } from '../enums/list.enums';
import { ListItemInterface } from './list-item.interface';

export interface ListInterface {
	type: ListTypeEnum;
	start: number;
	end: number;
	total: number;
	sort: string;
	sr: string;
	item: ListItemInterface[];
}
