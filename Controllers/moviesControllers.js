
const Tour=require('./../Models/tourmodel');

exports.getdestination=async(req,res)=>{
    try{
        const tourwithid=await Tour.findById(req.params.id);
        res.status(200).json({
            status:"sucess",
            data:tourwithid
        })
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
}
exports.getalldestination=async(req,res)=>{
    try{
        const tours=await Tour.find();
        res.status(201).json({
            status:"sucess",
            length:tours.length,
            data:tours
        })
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
}

exports.createdestination=async(req,res)=>{
    try{
        const tour=await Tour.create(req.body);
        res.status(201).json({
            status:"sucess..",
            data:{
                tour
            }
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
    
}

exports.updatedestination=async(req,res)=>{
    try{
        const updatedtour=await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).json({
            status:"sucess",
            data:updatedtour
        })}
        catch(err){
            res.status(400).json({
                status:"failed",
                message:err.message
            })
        }
    
}
exports.deletedestination=(req,res)=>{

}