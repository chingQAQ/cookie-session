var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if (req.session.view) {
    req.session.view++;
  } else {
    req.session.view = 1;
  }
  
  const pos = { x: req.session.x ?? 0, y: req.session.y ?? 0 };
  console.log(req.session)
  res.render('index', { title: 'Express', view: req.session.view, pos });
});

router.post('/', function (req, res, next) {

  const { x, y } = req.body;

  req.session.x = x;
  req.session.y = y;

  // console.log(req.session)
  // res.cookie('x', x, { expires: new Date(Date.now() + 900000), httpOnly: true })
  // res.cookie('y', y, { expires: new Date(Date.now() + 900000), httpOnly: true })

  return res.end();
});


module.exports = router;
