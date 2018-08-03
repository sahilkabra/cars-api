import logger from './logger';
import server from './server';

const port = process.env.PORT || 9001;

server.listen(port, (err: any) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`server is listening on ${port}`);
});
