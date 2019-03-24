const mongoose = require('mogngoose');
//customer schema
const customerSchema = mongoose.schema({
	firstname : {type:String},
	lastname: {type:String},
	phone : {type:String},
	email : {type: String}
});

//Define and export
module.exports = mongoose.model('customer', customerSchema);