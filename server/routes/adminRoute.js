const express = require("express");
const {
    getUnapprovedUsers,
    insertUsers,
    deleteUser
} = require("../controllers/adminController");


const router = express.Router();

router.route("/getUnapprovedUsers").get(getUnapprovedUsers);

router.route("/insertUsers").post(insertUsers);

//router.route("/delete/:username").delete(deleteUser);



module.exports = router;