let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		let hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	let condition = 'id = ' + req.params.id;

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	let condition = 'id = ' + req.params.id;

	burger.delete('burgers', condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;