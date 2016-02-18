var mongoose = require('mongoose');
var Schedule = mongoose.model('Schedule');
module.exports =  {
    create: function(req, res){
        var new_schedule = new Schedule({schedule: req.body.info});
        console.log(new_schedule)
        new_schedule.save(function(err){
            if(err){
                console.log('err');
            }else{
                req.session.schedule = req.body.info
                res.json(req.session.schedule)
            }
        })
    }
}