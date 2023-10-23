
const mongoose = require("mongoose");
const {member_status_enums, member_type_enums} = require("../lib/config");


// memberSchema => Schema modellar dey yuritiladi
let ordinary_enums;
const memberSchema = new mongoose.Schema({
   mb_nick: {
       type: String,
       required: true,
       index: {unique: true, sparse: true}  //mb-nick qayta ishlatilsa xatolik chiqaradi.
   },
    mb_phone: {
       type: String,
        required: true,
    },
    mb_password: {
       type: String,
        required: true,
        select: false  //bydefaul bizga passwordni bermasin.
    },
    mb_type: {
       type: String,
        required: false,
        default: "USER",
        enum: {
            values: member_type_enums,  //shulardan boshqa malumot kelsa false buladi.
            message: "{VALUE} is not among permitted values"
        }
    },
    mb_status: {
        type: String,
        required: false,
        default: "ACTIVE",
        enum: {
            values: member_status_enums,  //shulardan boshqa malumot kelsa false buladi.
            message: "{VALUE} is not among permitted values"
        }
    },
    mb_address: {
       type: String,
        required: false,
    },
    mb_description: {
        type: String,
        required: false,
    },
    mb_image: {
       type: String,
        required: false,
    },
    mb_point: {
       type: Number,
        required: false,
        default: 0,
    },
    mb_top: {// restaurant un kerak
       type: String,
        required: false,
        default: 'N',
        enum: {            //enum bu biz oldindan belgilab oladigan qiymat.
            values: ordinary_enums,
            message: "{VALUE} is not among permitted values"
        },
    },
    mb_views: {
       type: String,
        required: false,
        default: 0
    },
    mb_likes: {
        type: String,
        required: false,
        default: 0
    },
    mb_follow_cnt: {  // men kimgagir follow bulaman.
        type: String,
        required: false,
        default: 0
    },
    mb_subscriber: {  // kimdir menga follower buladi.
        type: String,
        required: false,
        default: 0
    },
 },
  {timestamps: true}  //createdAT and updateAT qiymatlarni oladi.
);



module.exports = mongoose.model("Member", memberSchema); //modelni ichiga 2ta qiymat talab qilinmoqda (member) va (Schema model).
// yuqorida yasab olgan memberSchemani pass qilib olib kelayopmiz.
// buyerdagi Memberni biz birlik shaklini quyganimiz bn ,
// avtomatik tarzda members qilib kuplikda quyib oladi.