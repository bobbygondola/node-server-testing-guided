const supertest = require('supertest');

const server = require('./server');


    //THANK GOD, we can test in testing ENV--after npm cross-env then change p.json..
it('should use testing env', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('server.js', () => {
    describe('get to /', () => {
            //CHECKING STATUS CODE!
        it('should return 200', () => {
            return supertest(server).get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
            //CHECKING THE RESPONSE
        it('should return api up', () => {
            return supertest(server).get('/')
            .then(res => {
                expect(res.body.api).toBe("up");
                expect(res.body).toEqual({api:"up"});
            })
        })
            //CHECKING TYPE OF LANGUAGE
        it('should return json', () => {
            return supertest(server).get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})

            //Checking if the hobbit actually posts
//     describe('/post /hobbits', () => {
//         it('should save the hobbit', () => {
//      return supertest(server).post('/hobbits')
//         .send({name: "bobby"})
//         .then(res => {
//          expect(res.body.name).toBe("bobby")
//       })
// })
// })
