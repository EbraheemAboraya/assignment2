const request=require("supertest");
const app=require("../index");
const shelterRepository=require("../repositories/shelterRepository");
const {BadRequestError,NotfoundError,ServerError}=require("../Error/error");

jest.mock("../repositories/shelterRepository");

// GET all shelters tests
describe("Get/shelters",()=>{


})

// GET shelterID tests
describe("Get/shelters/:id",()=>{


})

// create shelters tests
describe("POST/shelters",()=>{


})

// EDIT shelters tests
describe("PUT/shelters/:id",()=>{



})

// DELETE shelters tests
describe("DELETE/shelters/:id",()=>{


})