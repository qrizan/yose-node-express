primeFactorsOf = function(number) {
	var factors = [];
	var factor = 2;

	while (number > 2) {
		while(number % factor === 0){
			factors.push(factor);
			number = number / factor;
		}
		factor ++;
	}
	// var factors = [number];
	return factors;
};

module.exports = primeFactorsOf;
