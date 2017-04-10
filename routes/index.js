var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Awesome Cars!',
    tagLine: 'Love for Sports Cars is never ending!!!'
  });
});

router.get('/:car', function (req, res, next) {
  var car = req.params.car;
  var title, tagLine, nunberOfImages;

  if (car === 'ferrari488') {
    title = "Ferrari 488";
    tagLine = "Ferrari -> We are the competition.";
    nunberOfImages = 4;
  }
  else if (car === 'audiR8') {
    title = "Audi R8";
    tagLine = "Audi -> Vorsprung durch Technik";
    nunberOfImages = 5;
  }
  else if (car === 'lamborginiAventador') {
    title = "Lamborgini Aventador";
    tagLine = "Lamborgini -> Follow your ears";
    nunberOfImages = 5;
  }
  else if (car === 'jaguarFType') {
    title = "Jaguar F-Type";
    tagLine = "Jaguar -> The Art of Performance";
    nunberOfImages = 1;
  }
  else if (car === 'camaro') {
    title = "camaro";
    tagLine = "Chevrolet -> Find new Roads";
    nunberOfImages = 4;
  }

  res.render('cars', {
    title: title,
    tagLine: tagLine,
    car: car,
    numberOfImages: nunberOfImages
  });
});

module.exports = router;
