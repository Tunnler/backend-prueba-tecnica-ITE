const request = require('supertest');
const app = require('../src/app');

describe('User Routes', () => {
    it('should get all users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
    });

    it('should create a new user', async () => {
        const res = await request(app).post('/users').send({
            nombre: 'John Doe',
            email: 'john.doe@example.com'
        });
        expect(res.statusCode).toBe(200);
    });
});