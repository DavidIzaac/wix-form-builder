const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FieldSchema = new Schema({
    inputName:String,
    fieldLabel:String,
    inputType:{ type: String, enum: ["text", "color", "date", "email", "tel", "number"] }
});


let FormSchema = new Schema({
    name:String,
    fields:[FieldSchema],
    submissions:[{type:Object}]
});

FormSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
    }
});

let Form = mongoose.model('Form', FormSchema, 'form');
module.exports = Form;