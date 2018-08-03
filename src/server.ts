import * as express from 'express';

class Server {
    public express: express.Express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes = () => {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!',
            });
        });
        this.express.use('/', router);
    };
}

export default new Server().express;
