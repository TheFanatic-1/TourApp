const express=require('express')
const moviesController=require('./../Controllers/moviesControllers');
const router=express.Router();

router.route('/')
.get(moviesController.getalldestination)
.post(moviesController.createdestination);

router.route('/:id')
.get(moviesController.getdestination)
.delete(moviesController.deletedestination)
.patch(moviesController.updatedestination);

module.exports=router;
