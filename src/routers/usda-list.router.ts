import { ResponseFormatEnum } from '@model/external/enums/api.enums';
import { ListSortEnum, ListTypeEnum } from '@model/external/enums/list.enums';
import { ApiListRequestInterface } from '@model/external/interfaces/api-list-request.interface';
import { RequestResponseModel } from '@model/internal/payloads/request-response.model';
import { Request, Response, Router } from 'express';
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

	public getList(listType: ListTypeEnum) {
		return (req: Request, res: Response) => {
			console.log(listType, req);
			res.status(200).json(
				new RequestResponseModel({
					message: 'success',
					payload: 'This is response'
				})
			);
		};
	}

	public routes() {
		this.router.get('/food', this.getList(ListTypeEnum.FOOD));
		this.router.get('/food-group', this.getList(ListTypeEnum.FOOD_GROUP));
		this.router.get('/nutrients', this.getList(ListTypeEnum.ALL_NUTRIENTS));
		this.router.get(
			'/derication-codes',
			this.getList(ListTypeEnum.DERIVATION_CODES)
		);
		this.router.get(
			'/speciality-nutrients',
			this.getList(ListTypeEnum.SPECIALITY_NUTRIENTS)
		);
		this.router.get(
			'/standard-release-nutrients',
			this.getList(ListTypeEnum.STANDARD_RELEASE_NUTRIENTS)
		);
	}
}
