// write tests in builder pattern

const {spec}  = require('pactum');

it("should return count of persons from page 2", async()=>{
    await spec()
    .get('https://reqres.in/api/users?page=2')
    .expectStatus(200)
    .expectBodyContains('page')
});