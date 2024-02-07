const sheltercontrolles = require("../controlles/shelter_controller");
const express = require('express');
const {Router} = require("express");
const router = express.Router();

router.get('/',sheltercontrolles.getAllShelters);
router.get('/:id',sheltercontrolles.getShelterId);//לא עובד טוב ה id
router.post('/add_shelter',sheltercontrolles.createShelter);
router.put('/:id',sheltercontrolles.EditShelter);
router.delete('/:id',sheltercontrolles.DeleteShelter);

module.exports=router;