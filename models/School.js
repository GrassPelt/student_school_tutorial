const mongoose = require('mongoose');

const School = new mongoose.Schema(
	{
		Name: {type:String,trim:true,default:''},
		Address: {type:String,trim:true,default:''},
		usdCode: {type:Number,default:0},
		City: {type:String,trim:true,default:''},
		//team: [{type: Schema.Types.ObjectID, ref: 'Team'}],
		State: {type:String,trim:true,default:''}
	}
)

module.exports = mongoose.model('School', School)