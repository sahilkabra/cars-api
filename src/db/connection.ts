import * as mongoose from 'mongoose';

import config from '../config';
import logger from '../logger';

class Connection {
    public connectToMongo() {
        const mongoUrl = config.mongo.url();
        mongoose.connect(
            mongoUrl,
            { useNewUrlParser: true }
        );
        mongoose.connection.on('error', () => {
            logger.error(`unable to connect to mongo db on ${mongoUrl}`);
        });
    }
}

export default new Connection();
