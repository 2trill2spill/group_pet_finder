var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/Pet_Center';

router.get('/', function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }

    client.query("SELECT COUNT(id) FROM favorites",
      function(err, result) {
        done();

        if(err) {
          console.log("select error: ", err);
          res.sendStatus(500);
        }
        // console.log('results: ', resultStuff);

        res.send(result.rows);
    });

  });
});




module.exports = router;
