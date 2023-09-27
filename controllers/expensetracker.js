const expensetracker = require('../models/expensetracker');

//add-category
exports.addCategory = async (req,res,next)=>{
    try {
        console.log("post request received", req.body)
        const expense = req.body.expense;
        const description = req.body.description;
        const carname = req.body.carname;
        //console.log(expense,description,carname);
        const data = await expensetracker.create({expense: expense, description: description, carname:carname}) 
        res.status(201).json({newExpensetrackRecord: data});
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

//delete-category
exports.deleteCategory = async (req,res)=>{

    try {
        const carId = req.params.id;
        await expensetracker.destroy({where : {id:carId}})
        console.log("one record deleted")
        res.sendStatus(200)
    } catch (error) {
        console.log("error at deleting user")
        res.status(500).json({error: error})
    }
}


//get-category
exports.getAllCategories =async (req,res,next)=>{
    try {
        const categories = await expensetracker.findAll();
        res.status(200).json({allcategorydetails: categories});
    } catch (error) {
        console.log("error at getting all categories")
        res.status(500).json({error: error})   
    } 
}