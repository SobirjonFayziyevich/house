

const express = require("express");  // routerdan malumotni olib kelayopmiz
const router = express.Router(); // expressdan router malumotlarini  olib chiqayopmiz.



//  ("/") bu localhost 3000ga kirib kelgan req ga turlixil routerlarni shakillantiramiz.
router.get("/",function(req, res) {
    res.send("home sahifasidasiz");  // (send) bu yunaltiradi manzilga,home sahifadasiz
});
router.get("/menu",function(req, res) {
    res.send("menu sahifasidasiz");
});

router.get("/community",function(req, res) {
    res.send("jamiyat sahifasidasiz");
});


module.exports = router;



