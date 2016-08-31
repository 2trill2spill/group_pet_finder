var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/Pet_Center';

router.delete('/:petID', function(req, res) {
  var petID = req.params.petID;

  pg.connect(connectionString, function(err, client, done) {
    if(err){
      res.sendStatus(500);
      console.log('error in DELETE, pg.connect', err, "\n \n \n \n ");
    };

    var queryString = 'DELETE FROM favorites WHERE pet_id = $1';
    var referenceValues = [petID];



    client.query(queryString, referenceValues,

        function(err, result) {
          done();
          if(err) {
            res.sendStatus(500);
            console.log("error in DELETE, client.query", err, "\n \n \n \n ");
            return;
          }
          res.sendStatus(202);
        });
      });
});

module.exports = router;
