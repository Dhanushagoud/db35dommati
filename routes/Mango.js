var express = require('express');
const mango_controlers= require('../controllers/mango');
var router = express.Router();
/* GET mango */
router.get('/', mango_controlers.mango_view_all_Page );


/* GET detail costume page */
router.get('/detail', mango_controlers.mango_view_one_Page);

/* GET create costume page */
router.get('/create', mango_controlers.mango_create_Page);
/* GET create update page */
router.get('/update', mango_controlers.mango_update_Page);
/* GET create costume page */
router.get('/delete', mango_controlers.mango_delete_Page);


module.exports = router;