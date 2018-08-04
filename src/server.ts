import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Router } from './router';

class Server {
    public express: express.Express;

    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use('/', Router);
    }
}

export default new Server().express;
