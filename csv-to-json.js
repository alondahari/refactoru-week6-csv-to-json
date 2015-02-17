var fs = require('fs');
var _ = require('underscore');
var csv = fs.readFileSync(process.argv[2], 'utf-8');
csv = csv.split('\r\n');
var categories = csv.splice(0,1)[0].split(',');

var json = _.map(csv, function(val){
	return _.object(categories, val.split(','));
});

console.log(json);