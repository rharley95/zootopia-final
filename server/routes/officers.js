var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const Officers = require('../models/officer');

function returnError(res, error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    });
  }

router.get('/',
(req, res, next) => {
Officers.find()
    .populate('group')
    .then(officers => {
        res.status(200).json ({
            message: 'officers fetched successfully!',
            officers: officers
        });
    })
    .catch(error => {
    returnError(res, error);
  });
}
);

router.get('/:id',
(req, res, next) => {
Officers.findOne({"id" : req.params.id})
    .populate('group')
    .then(officer => {
        res.status(200).json ({
            message: 'officers fetched successfully!',
            officer: officer
        });
    })
    .catch(error => {
    returnError(res, error);
  });
}
);

router.post('/', (req, res, next) => {
    const maxOfficerId = sequenceGenerator.nextId("officers");
  
    const officer = new Officers({
      id: maxOfficerId,
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      phone: req.body.phone,
      img: req.body.img
    });
  
    officer.save()
      .then(createdOfficer => {
        res.status(201).json({
          message: 'officer added successfully',
          officer: createdOfficer
        });
      })
      .catch(error => {
        returnError(res, error);
      });
  });

  router.put('/:id', (req, res, next) => {
    Officers.findOne({ id: req.params.id })
      .then(officer => {
        console.log('hey');
        console.log(officer);
        officer.name = req.body.name;
        officer.description = req.body.description;
        officer.email = req.body.email;
        officer.phone = req.body.phone;
        officer.img= req.body.img;

        officer.save();
  
        Officers.updateOne({ id: req.params.id }, officer)
          .then(result => {
            res.status(204).json({
              message: 'officer updated successfully'})
          })
          .catch(error => {
            returnError(res, error);
          });
      })
      .catch(error => {
        res.status(500).json({
          message: 'officer not found.',
          error: { officer: 'officer not found'}
        });
      });
  });


  router.patch('/:id', function(req, res, next){
      Officer.findOne({ id: req.params.id }, function (err, officer){
          if (err ||!officer) {
              return res.status(500).json({
                  title: "No Officers found!",
                  error: {officer: 'Officer not found'}
              });
          }
          officer.name = req.body.name;
          officer.description = req.body.description;

          saveOfficer(req, officer);
      });
  });

  router.delete("/:id", (req, res, next) => {
    Officers.findOne({ id: req.params.id })
      .then(officer => {
        Officers.deleteOne({ id: req.params.id })
          .then(result => {
            res.status(204).json({ message: "officer deleted successfully" });
          })
          .catch(error => {
            returnError(res, error);
          })
      })
      .catch(error => {
        returnError(res, error);
      });
  });

module.exports = router;