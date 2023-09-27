const express = require('express');

const router = express.Router();
const expensetrackerController = require('../controllers/expensetracker');

router.post('/add-category', expensetrackerController.addCategory);
router.delete('/delete-category/:id', expensetrackerController.deleteCategory);
router.get('/get-allcategories', expensetrackerController.getAllCategories);
module.exports = router;