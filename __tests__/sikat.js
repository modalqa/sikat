const frisby = require('frisby');

for(let i = 0; i < 5000; i++) {
it ('should return a status of 200', function () {    
  return frisby
    .get('https://pintek.id')
    .expect('status', 200);
});

it ('should return a status of 200', function () {    
    return frisby
      .get('https://pintek.id/hasil-pencarian-pendidikan')
      .expect('status', 200);
    });
}