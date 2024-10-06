const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    pprodname:String,
    qty:Number,
    price:Number,
    status:String
});

module.exports = mongoose.model('Inventory', InventorySchema);