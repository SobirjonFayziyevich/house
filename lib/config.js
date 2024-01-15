const mongoose = require("mongoose");

exports.member_type_enums = ["USER", "ADMIN", "OWNER"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordinary_enums = ["Y", "N"];

exports.product_collection_enums = ["dish", "salad", "dessert", "drink", "etc"];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = ["small", "large", "normal", "set"];
exports.product_volume_enums = [5, 10, 15, 30];

/*****************************************
 *   MONGODB RELATED COMMANDS            *
 *****************************************/

exports.shapeIntoMongooseObjectId = (target) => {
    if(typeof target === 'string') {
        return new mongoose.Types.ObjectId(target);
    } else return target;
}; 

