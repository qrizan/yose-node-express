var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

 var x = {number: request.query['number'],decomposition: decomposition};
 if (request.query['number'] == 'hello'){
	 x = {number: request.query['number'],"error" : "not a number"};
 }
	var number = parseInt(request.query['number']);
    var decomposition = primeFactorsOf(number);

	response.setHeader('Content-Type', 'application/json');
    response.send(x);
};

module.exports = primeFactors;
