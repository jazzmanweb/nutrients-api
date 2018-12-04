import { ResponseFormatEnum } from '@model/external/enums/api.enums';
import { ListSortEnum, ListTypeEnum } from '@model/external/enums/list.enums';
import { ApiListRequestInterface } from '@model/external/interfaces/api-list-request.interface';
import { RequestResponseModel } from '@model/internal/payloads/request-response.model';
import { Request, Response, Router, NextFunction } from 'express';
import { API_KEY } from '../../config/config';

export class UsdaListRouter {
	public router: Router;
	public endpoint = {
		host: 'api.nal.usda.gov',
		port: 80,
		path: '/ndb/list'
	};
	public request: ApiListRequestInterface = {
		api_key: API_KEY,
		max: 100,
		offset: 0,
		sort: ListSortEnum.ID,
		format: ResponseFormatEnum.JSON
	};

	//https://?format=json&sort=n&api_key=APIKEY&max=500&lt=ns
	constructor() {
		this.router = Router();
		this.routes();
	}

	public addType(type: ListTypeEnum) {
		return (req: Request, res: Response, next: NextFunction) => {
			res.locals.listType = type;
			next();
		};
	}

	// public getList(listType: ListTypeEnum) {
	public getList(req: Request, res: Response, next: NextFunction) {
		console.log(req, res);
		res.status(200).json(
			new RequestResponseModel({
				message: 'success',
				payload: res.locals
			})
		);
	}
	// }

	public routes() {
		this.router.get('/food', this.addType(ListTypeEnum.FOOD), this.getList);
		this.router.get(
			'/food-group',
			this.addType(ListTypeEnum.FOOD_GROUP),
			this.getList
		);
		this.router.get(
			'/nutrients',
			this.addType(ListTypeEnum.ALL_NUTRIENTS),
			this.getList
		);
		this.router.get(
			'/derication-codes',
			this.addType(ListTypeEnum.DERIVATION_CODES),
			this.getList
		);
		this.router.get(
			'/speciality-nutrients',
			this.addType(ListTypeEnum.SPECIALITY_NUTRIENTS),
			this.getList
		);
		this.router.get(
			'/standard-release-nutrients',
			this.addType(ListTypeEnum.STANDARD_RELEASE_NUTRIENTS),
			this.getList
		);
	}
}
