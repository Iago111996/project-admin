const mongoose  = require("mongoose");

const DataSchema = new mongoose.Schema({
    code_request:{type:Number, default:1},
    form_pay:{type:String, default:1},
    type_invoice:{type:String, default:1},
    state_request:{type:String, default:1},
}, {
    timestamps:true,
});

const request = mongoose.model('Request', DataSchema);

module.exports = request;
