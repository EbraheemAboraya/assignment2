const fs=require("fs/promises");
const shelters=require("../models/shelters");
const {v4: uuidv4 } =require("uuid");
const {NotFoundError}=require("../Error/error");
const Shelter = require("../models/shelters");



const getallshelters =async ()=>{
     return await shelters.find();
}

const getShelterById =async id=> {
    const get_shelter= await shelters.findById(id);
    return get_shelter;
}

const createShelter=async shelters=> {
   const New_shelter=new Shelter(shelters);
   await New_shelter.save();
   return New_shelter;
}

const updateshelter =async (id,updateshelter)=>{
    const update_shelter = await shelters.findByIdAndUpdate(id,updateshelter,{new:true});
     if (!update_shelter) throw new NotFoundError(`Shelter with id ${id} not found`);
     return update_shelter;
}

const deleteshelter = async id=>{
   const delete_shelter=await shelters.findByIdAndDelete(id);
    if (!delete_shelter) throw new NotFoundError(`Shelter with id ${id} not found`);
    return delete_shelter;
}

module.exports = {
    getallshelters,
    getShelterById,
    createShelter,
    updateshelter,
    deleteshelter
}