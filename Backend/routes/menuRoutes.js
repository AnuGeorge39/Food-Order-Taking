const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menucontroller')

// CRUD routes
router.post('/', menuController.addMenuItem);
router.get('/', menuController.getMenuItems);
router.get('/:id', menuController.getMenuItemById);
router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
