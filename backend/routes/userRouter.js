import express from "express";
import {create, getusers, modify, UserDelete}from "../controllers/userController.js"

export const userRoute = express.Router();

userRoute.get('/', getusers);
userRoute.post('/create', create);
userRoute.put('/modify/:id', modify);
userRoute.delete('/delete/:id',UserDelete);