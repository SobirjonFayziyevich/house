// expressni ichidan routerni olib chiqayopmiz.
// membercontrollerni chaqirib olayopmiz.
const express=require("express"), router_bssr=express.Router();
const ownerController=require("./controllers/ownerController");
const productController=require("./controllers/productController");
const uploader_product=require("./utils/upload-multer")("products");
const uploader_members=require("./utils/upload-multer")("members");


/***************************************************
 *           BSSR  EJS (zamonaviy usul)            *
 ****************************************************/
// memberga dahldor routerlar
router_bssr.get("/", ownerController.home); // main qismi uchun.

router_bssr
    .get("/sign-up", ownerController.getSignupMyHome)      // membercontrollerni ichidagi signupga borayopti.
    .post("/sign-up",
        uploader_members.single("home_img"),
        ownerController.signupProcess);


router_bssr
    .get("/login", ownerController.getLoginMyHome)     // membercontrollerni ichidagi loginga borayopti.
    .post("/login", ownerController.loginProcess);

router_bssr.get("/logout",ownerController.logout);             // membercontrollerni ichidagi logoutga borayopti.
router_bssr.get("/check-me", ownerController.checkSession);    // sessionni tekshirish

router_bssr.get("/products/menu", ownerController.getMyHomeProducts);

router_bssr.post("/products/create",
    ownerController.validateAuthRestaurant,     //mahsulotni hosil qilih.
    uploader_product.array("product_images", 5),
    productController.addNewProduct);

router_bssr.post("/products/edit/:id",
    ownerController.validateAuthRestaurant,
    productController.updateChosenProduct);

router_bssr.get("/all-restaurant",
   ownerController.validateAdmin,
   ownerController.getAllRestaurants);

router_bssr.post("/all-restaurant/edit",
    ownerController.validateAdmin,
    ownerController.updateRestaurantByAdmin);

//bu faylni expoert qilamiz boshqa faylga.
module.exports=router_bssr;
