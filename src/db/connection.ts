import * as mongoose from 'mongoose';

import config from '../config';
import logger from '../logger';

const mongoUrl = config.mongo.url();
mongoose.connect(mongoUrl);
mongoose.connection.on('error', () => {
    logger.error(`unable to connect to mongo db on ${mongoUrl}`);
});
