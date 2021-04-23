var Mango = require('../models/mango');
// List of all mangos
// List of all Costumes
exports.mango_list = async function(req, res) {
    try{
    theMango = await Mango.find();
    res.send(theMango);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific mango.
exports.mango_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Mango.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle mango create on POST.
exports.mango_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Mango();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.Type = req.body.Type;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.send(err)
    res.status(500)
    }
    };
// Handle mango delete form on DELETE.
exports.mango_delete =  async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Mango.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};
// Handle mango update form on PUT.
exports.mango_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Mango.findById( req.params.id)
        // Do updates of properties
        if(req.body.Type) toUpdate.Type = req.body.Type;
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};
// VIEWS
// Handle a show all view
exports.mango_view_all_Page = async function(req, res) {
    try{
    theMango = await Mango.find();
    res.render('Mango', { title: 'Mango Search Results', results: theMango });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.mango_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Mango.findById( req.query.id)
        res.render('mangodetail', 
{ title: 'Mango Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mango_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('mangocreate', { title: 'Mango Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.mango_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Mango.findById(req.query.id)
        res.render('mangoupdate', { title: 'Mango Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.mango_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Mango.findById(req.query.id)
        res.render('mangodelete', { title: 'Mango Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


