

const express = require("express");  // routerdan malumotni olib kelayopmiz
const router = express.Router(); // expressdan router malumotlarini  olib chiqayopmiz.
const memberController = require('./controllers/memberController');
// memberga oid routers:

//  ("/") bu localhost 3000ga kirib kelgan req ga turlixil routerlarni shakillantiramiz.
// router.get("/",function(req, res) {
//     res.send("home sahifasidasiz");  // (send) bu yunaltiradi manzilga,home sahifadasiz
// });
router.get("/", memberController.home);           // memberControllerdagi malumotlar routerning Home sahifasiga boglanayopti.
router.post("/signup", memberController.signup);  //signup routeri membercontrollerning signupiga boradi.
router.post("/login", memberController.login);     //login routeri membercontrollerning loginiga boradi.
router.get("/logout", memberController.logout);     //loginout routeri membercontrollerning loginoutiga boradi.



// va boshqa routerlar:


router.get("/menu",function(req, res) {
    res.send("menu sahifasidasiz");
});

router.get("/community",function(req, res) {
    res.send("jamiyat sahifasidasiz");
});


module.exports = router;



