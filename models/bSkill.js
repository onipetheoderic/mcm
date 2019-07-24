import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);


var BSkill = new mongoose.Schema({
	name: String,
	school_id: String,

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});


// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('BSkill', BSkill);
