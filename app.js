


console.log("web serverni boshladik");
const express = require("express");
const app = express();   //instinsini yasadik.
const router = require("./router");

// //mongodb chaqirish;
// const db = require("./server").db();  //mongoose ga almashtirdik.
// const mongodb = require("mongodb");


// 1: Kirish code
// Har qanday browserdan kelayotgan requestlar un public folder ochiq degani.
app.use(express.static("public"));
//json formatdagi datani objectga exchange qilish.
app.use(express.json());
//html formatdan qabul qilinadigan datalarni serverga kiritish
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: Views code
//ejs orqali backend ni ichida frontendni yasash.
app.set("views", "views");
app.set("view engine",  "ejs",);

// 4 Routing code
app.use("/", router)   //expressga boglaymiz va har qanday kelgan malumotni routerga yuboramiz.

module.exports = app;