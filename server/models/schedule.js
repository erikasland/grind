var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ScheduleSchema = new mongoose.Schema({
    schedule: [Schema.Types.Mixed]
})