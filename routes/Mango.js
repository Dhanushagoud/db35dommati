var express = require('express');
const mango_controlers= require('../controllers/mango');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
var router = express.Router();
/* GET mango */
router.get('/', mango_controlers.mango_view_all_Page );


/* GET detail costume page */
router.get('/detail', mango_controlers.mango_view_one_Page);

/* GET create costume page */
router.get('/create', secured, mango_controlers.mango_create_Page);
/* GET create update page */
router.get('/update', secured, mango_controlers.mango_update_Page);
/* GET create costume page */
router.get('/delete', secured, mango_controlers.mango_delete_Page);


module.exports = router;