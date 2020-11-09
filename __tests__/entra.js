const frisby = require('frisby');

for(let i = 0; i < 10000; i++) {
it ('should return a status of 200', function () {    
  return frisby
    .get('https://entra.co.id/partner')
    .expect('status', 200);
  });

 
}

