const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromApi', function() {
  it('should resolve with correct data when success is true', function (done){
   getPaymentTokenFromAPI(true).
   then((data) => {
     assert.deepEqual(data, {data: 'Successful response from the API'});
     done();
   }).
   catch((error) => {
     done(error);
   });
  });

  it('should not do anything when success is false', function(done) {
  const result = getPaymentTokenFromAPI(false);

  if (result instanceof Promise) {
    result.
    then(() => {
      done(new Error('Promise should not have been resolved'));
    }).
    catch(() => {
      done(new Error('Promise should not have been rejected'));
    });
  } else {
    done();
    }
  });
});
