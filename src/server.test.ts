import * as request from 'supertest';

import server from './server';

describe('server', () => {
    it('responds with hello on request to /hello', async () => {
        const response = await request(server).get('/hello');

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello there!');
    });
});
