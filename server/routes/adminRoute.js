<<<<<<< Updated upstream
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
=======
const express = require('express');
const router = express.Router();
const 
{
    getUnapprovedUsers, 
    insertUsers, 
    deleteUser,
} = require('../controllers/adminController');




// Route to get unapproved users
router.route('/getUnapprovedUsers').get(getUnapprovedUsers);

// Route to insert the user
router.route('/insertUsers').post(insertUsers);

// Route to delete the user
router.route('/deleteUser/:username').delete(deleteUser);

module.exports = router;




>>>>>>> Stashed changes
