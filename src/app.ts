import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import { UsdaFoodReportRouter } from './routers/usda-food-report.router';
import { UsdaListRouter } from './routers/usda-list.router';
import { UsdaNutrientReportRouter } from './routers/usda-nutrient-report.router';

export class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.init();
	}

	public init() {
		this.setApi();
		this.routes();
	}

	private setApi() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(logger('dev'));
		this.app.use(compression());
		this.app.use(helmet());
		this.handleCors();
	}

	public handleCors() {
		const corsOptions: cors.CorsOptions = {
			allowedHeaders: ['sessionId', 'Content-Type'],
			exposedHeaders: ['sessionId'],
			origin: 'http://localhost:4200',
			credentials: true,
			optionsSuccessStatus: 200,
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			preflightContinue: false
		};
		this.app.use(cors(corsOptions));
	}

	public routes() {
		let router: express.Router = express.Router();
		this.app.use(router);

		const usdaListRouter = new UsdaListRouter();
		this.app.use('/api/usda/list', usdaListRouter.router);

		const usdaFoodReportRouter = new UsdaFoodReportRouter();
		this.app.use('/api/usda/food-report', usdaFoodReportRouter.router);

		const usdaNutrientReportRouter = new UsdaNutrientReportRouter();
		this.app.use(
			'/api/usda/nutrient-report',
			usdaNutrientReportRouter.router
		);
	}
}
