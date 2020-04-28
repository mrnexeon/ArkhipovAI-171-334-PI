const expect = require('chai').expect;
const request = require('request');

describe('Main requests: /*', () => {
    it('Request successful: GET * (React page)', done => {
        request('http://localhost:3000', function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('Request successful: GET /user/token', done => {
        request('http://localhost:4000/user/token?email=the.nexeon@gmail.com&password=Metro2033', function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(res.body).userId).to.equal(1);
            done();
        });
    });
});

