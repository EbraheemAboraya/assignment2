const shelterRepository=require("../repositories/shelterRepository");
const {BadRequestError,NotfoundError,ServerError}=require("../Error/error");



const getAllShelters=async (req,res)=>{
  try{
      const shelters=await shelterRepository.getallshelters();
      if (!shelters || shelters.length === 0) throw new NotfoundError("shelters");
      return res.status(200).json(shelters)
  }
  catch (Error){
      res.status(Error?.status||500).json({message:Error.message});
  }
}

const getShelterId=async (req,res) => {
    const {id}=req.params;
    try{
        if(id ===":id") throw new BadRequestError("id");
        const shelter_id= await shelterRepository.updateshelter(req.params.id);
        if(!shelter_id) throw new NotfoundError("user with id ${id}");
        res.json(shelter_id);
    }
    catch (Error) {
        res.status(Error?.status||500).json({message:Error.message});
    }
}

const createShelter=async (req,res)=>{
    try{
        const {location,title,capacity}=req.body;
        const new_shelter ={location,title,capacity};
        if (!location || !title || !capacity) throw new BadRequestError("location,title,capacity");
        const NewShelter=await shelterRepository.createShelter(new_shelter);
        return res.status(201).json(NewShelter);
    }
    catch (Error) {
        res.status(Error?.status||500).json({message:Error.message});
    }
}

const EditShelter =async (req,res)=>{
    const {id}=req.params;
    try
    {
        if(id ===":id") throw new BadRequestError("id");
        const newData = req.body;
        const Edit_Shelter = await shelterRepository.updateshelter(id,newData);
        if (!Edit_Shelter) throw new NotfoundError("user with id ${id}");
        res.status(201).json(Edit_Shelter);
    }
    catch (error) {
        res.status(Error?.status||500).json({message:Error.message});
    }
}

const DeleteShelter=async (req,res)=>{
    const {id}=req.params;
    try
    {
        if(id ===":id") throw new BadRequestError("id");
        const deletedShelter = await shelterRepository.deleteshelter(id);
        if (!deletedShelter) throw new NotfoundError("user with id ${id}");
        res.status(204).send();
    }
    catch (error) {
        res.status(Error?.status||500).json({message:Error.message});
    }
}
module.exports = {
    getAllShelters,
    getShelterId,
    createShelter,
    EditShelter,
    DeleteShelter
}