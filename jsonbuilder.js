var fs = require('fs');

fs.saveJSON = function(what) {
    fs.writeFileSync('result.json', JSON.stringify(what, null, '  '), 'utf-8');
};

var result = fs.readdirSync('./app/images/').filter(function (item) {
    return item != 'yeoman.png';
}).map(function(item) {

    return {
        'imagePath' : './images/' + item,
        'description' : item.replace(/\.gif$/,'').split("_").join(" "), 
        'active': true 
    }
});

fs.saveJSON(result);
console.log("All done!");
