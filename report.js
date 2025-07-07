const newman = require('newman');
require('dotenv').config();

newman.run({
    
    collection: `https://api.postman.com/collections/46281351-32574785-dd41-4592-8d3d-99bca9803ad6?access_key=${process.env.pmatKey}`,
    reporters: `htmlextra`,
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});