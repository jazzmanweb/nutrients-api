import { Request, Response, Router } from 'express';
import { RequestResponseModel } from '@model/internal/payloads/request-response.model';

export class UsdaFoodReportRouter {
	public router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	public getList(req: Request, res: Response): void {
		res.status(200).json(
			{
				message: 'success',
				payload: 'This is response'
			}
		)
	}

	public routes() {
		this.router.get('/', this.getList);
	}
}