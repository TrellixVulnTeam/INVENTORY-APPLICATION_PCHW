var express = require('express');
var router = express.Router();
var category_controller = require('../controllers/category');
var computerparts_controller = require('../controllers/computerpart');
var manufacturer_controller = require('../controllers/manufacturer');
/// BOOK ROUTES ///
/* GET home page. */
router.get('/catalog', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
// GET request for creating a ComputerPart. NOTE This must come before routes that display ComputerPart (uses id).
router.get('/computerparts/create', computerparts_controller.computerparts_create_get);

// POST request for creating ComputerPart.
router.post('/computerparts/create', computerparts_controller.computerparts_create_post);

// GET request to delete ComputerPart.
router.get('/computerparts/:id/delete', computerparts_controller.computerparts_delete_get);

// POST request to delete ComputerPart.
router.post('/computerparts/:id/delete', computerparts_controller.computerparts_delete_post);

// GET request to update ComputerPart.
router.get('/computerparts/:id/update', computerparts_controller.computerparts_update_get);

// POST request to update ComputerPart.
router.post('/computerparts/:id/update', computerparts_controller.computerparts_update_post);

// GET request for one ComputerPart.
router.get('/computerparts/:id', computerparts_controller.computerparts_detail);
*/
// GET request for list of all ComputerPart items.
router.get('/computerparts', computerparts_controller.computerparts_list);

/// manufacturer ROUTES ///
//We have not handled these controllers yet so comment them out

// GET request for creating manufacturer. NOTE This must come before route for id (i.e. display manufacturer).
/*
router.get('/manufacturer/create', manufacturer_controller.manufacturer_create_get);
/*
// POST request for creating Manufacturer.
router.post('/manufacturer/create', manufacturer_controller.manufacturer_create_post);

// GET request to delete Manufacturer.
router.get('/manufacturer/:id/delete', manufacturer_controller.manufacturer_delete_get);

// POST request to delete Manufacturer.
router.post('/manufacturer/:id/delete', manufacturer_controller.manufacturer_delete_post);

// GET request to update Manufacturer.
router.get('/manufacturer/:id/update', manufacturer_controller.manufacturer_update_get);

// POST request to update Manufacturer.
router.post('/manufacturer/:id/update', manufacturer_controller.manufacturer_update_post);
*/
// GET request for one Manufacturer.
router.get('/manufacturer/:id', manufacturer_controller.manufacturer_detail);

// GET request for list of all Manufacturer.
router.get('/manufacturer', manufacturer_controller.manufacturer_list);

/// Category ROUTES ///
/*
// GET request for creating a Category. NOTE This must come before route that displays Category (uses id).
router.get('/category/create', category_controller.category_create_get);

//POST request for creating Category.
router.post('/category/create', category_controller.category_create_post);

// GET request to delete Category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete Category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update Category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update Category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one Category.
router.get('/category/:id', category_controller.category_detail);
*/
// GET request for list of all Category.
router.get('/category', category_controller.category_list);

module.exports = router;