const express = require("express");
const router = express.Router();

const { UserSignup, UserLogin, UserEmail, UserPassword, UserChPassword } = require("../controllers/indexcontroller.js");
const { getProduct, insertProduct, editProduct, editedProduct, deleteProduct } = require("../controllers/ProductController.js")
const { getCatagory, insertCatagory, getEditPage, editPage, deleteCatagory } = require("../controllers/CatagoryController.js")


////////////////////Sign In Page Modules///////////////////////////////

router.get("/users/signup", UserSignup);

router.get("/users/login", UserLogin);

router.get("/users/:email/update", UserEmail);

router.get("/users/:password/update", UserPassword);

router.get("/users/change-password", UserChPassword);

///////////////////////Product Page///////////////////////////////

/* Product Route */
router.route("/Product").get(getProduct);
router.route("/addProduct").post(insertProduct);
router.route("/editProduct/:id").get(editProduct);
router.route("/editProduct/:id").post(editedProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

/* Catagories Routes */
router.route("/Catagory").get(getCatagory);
router.route("/addCatagory").post(insertCatagory);
router.route("/edit/:id").get(getEditPage);
router.route("/edit/:id").post(editPage);
router.route("/delete/:id").delete(deleteCatagory);

/* logout */
router.route("/logout").get(logOut);


module.exports = router;