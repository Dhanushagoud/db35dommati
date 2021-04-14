var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var manoges_controller = require('../controllers/mango');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// mango ROUTES ///
// POST request for creating a mango.
router.post('/resource/mangoes', manoges_controller.mango_create_post);
// DELETE request to delete mango.
router.delete('/resource/mangoes/:id', manoges_controller.mango_delete);
// PUT request to update mango.
router.put('/resource/mangoes/:id', manoges_controller.mango_update_put);
// GET request for one mango.
router.get('/resource/mangoes/:id', manoges_controller.mango_detail);
// GET request for list of all mango items.
router.get('/resource/mangoes', manoges_controller.mango_list);
module.exports = router;