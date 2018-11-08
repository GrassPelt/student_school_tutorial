const mongoose = require('mongoose');

const Student = new mongoose.Schema(
	{
		firstName: {type:String,trim:true,default:''},
		lastName: {type:String,trim:true,default:''},
		City: {type:String,trim:true,default:''},
		State: {type:String,trim:true,default:''},
		School: { type:mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
		Grade: {type:Number,default:0},
		Email: {type:String,trim:true,default:''},
		Phone: {type:String,trim:true,default:''},
	}
)

module.exports = mongoose.model('Student', Student)