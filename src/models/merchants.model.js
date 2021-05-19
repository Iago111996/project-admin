const mongoose  = require("mongoose");

const DataSchema = new mongoose.Schema({
    name_responsible:String,
    name_marketplace:String,
    code_client:{type:String, default:1},
    number_cnpj:Number,
    address_state:String,
    address_city:String,
    address_district:String,
    address_street:String,
    address_number:Number,
}, {
    timestamps:true,
});

const merchant = mongoose.model('Merchent', DataSchema);

module.exports = merchant;
