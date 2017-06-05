var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({
  },(err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.post('/', (req, res) => {
  var newUser = new User(req.body);
  newUser.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.put('/:id', (req, res) => {
  User.findById(req.params.id, (err, doc) => {
    if (err) {
      res.send(err);
    }
    doc.data = req.body.data;
    doc.save((err, doc) => {
      if (err) {
        res.send(err);
      } else {
        res.send(doc);
      }
    });
  });
});

router.delete('/:id', (req, res) => {
  User.remove({_id: req.params.id}, (err) => {
    if (err)
      res.send(err);
    else {
      res.send('Delete Successful');
    }
  });
});

module.exports = router;