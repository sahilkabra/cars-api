import * as winston from 'winston';
import server from './server';

const port = process.env.PORT || 9001;
const logger = winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

server.listen(port, (err: any) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`server is listening on ${port}`);
});
