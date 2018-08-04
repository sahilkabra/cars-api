import * as express from 'express';

import CarController from './car/controller';

const router = express.Router();
router.get('/hello', (req, res) => {
    res.json({
        message: 'Hello there!',
    });
});
router.post('/cars', CarController.create);
router.get('/cars', CarController.getCars);
router.get('/cars/:id', CarController.getCar);

export { router as Router };
