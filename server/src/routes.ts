import express from 'express';
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import multer from 'multer'
import multerConfig from '../config/multer'

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const upload = multer(multerConfig);

routes.post('/points', upload.single('image'), pointsController.create);
routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes
