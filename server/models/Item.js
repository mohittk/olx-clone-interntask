const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    item_name : String,
    item_price : String,
    item_status : String
})

module.exports = mongoose.model('Items', Item);