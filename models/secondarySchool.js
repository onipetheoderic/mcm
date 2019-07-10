import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mcsm");
autoIncrement.initialize(connection);
//my beautiful database structure for the report sheet

var SecondarySchool = new mongoose.Schema({
		pupil_id: String,
		staff_id: String,
		report_id: String,
		Mathematics: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		English_Language: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Geography: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		History: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Nigerian_Language: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Economics: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Biology: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Chemistry: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Technical_Drawing: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Physics: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Fine_Arts: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Agricultural_Science: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Civic_Education: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		CRK: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		IRK: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		PHE: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Photography: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Cosmetology: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Government: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Commerce: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Literature: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Accounting: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Marketing: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		French: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
  		Further_Mathematics: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Computer_Studies: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Home_Economics: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},
		Music: { 
					    test1:  { type: Number },
					    test2:     { type: Number},
					    test3:     { type: Number},
					    exam:   { type: Number }
  					},

},
{
    timestamps: true//this will automatically add the createdAt and the updatedAt field for us
});

// School.plugin(autoIncrement.plugin, { model: 'School', field: 'school_id' });
module.exports = mongoose.model('SecondarySchool', SecondarySchool);
