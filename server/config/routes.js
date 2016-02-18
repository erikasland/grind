var Schedules = require('./../controllers/schedules.js');
module.exports = function(app){
    app.post('/schedule', function(req, res){
        Schedules.create(req, res);
    })
}
