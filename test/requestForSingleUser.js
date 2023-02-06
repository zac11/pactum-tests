// makes a request for a single user
const pjr = require('pactum-json-reporter');
const { spec, reporter } = require('pactum');

before(()=>{
    reporter.add(pjr);
});

it('should get the details for user 2', async () => {
  await spec()
    .get('https://reqres.in/api/users/2')
    .expectStatus(200)
    .expectBodyContains('id',2);
});
 

it("should get the details for the user 1",async()=>{
    await spec()
    .get('https://reqres.in/api/users/1')
    .expectStatus(200)
    .expectBodyContains('id',1);
});

after(async ()=>{
    await reporter.end();
});