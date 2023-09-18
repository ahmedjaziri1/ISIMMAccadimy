import { error } from 'console';
import { UserModel } from './../Module/User.js'
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ Email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ Email: oldUser.Email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { Email, password, username, birthday,country,terms,joinDate,level } = req.body;

  try {
    const oldUser = await UserModel.findOne({ Email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ Email, password: hashedPassword, username, birthday,country,terms,joinDate,level});

    const token = jwt.sign( { Email: result.Email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


export const getUser = async (req,res) => {

   try{

        const getuser = await UserModel.find();
        console.log(getuser)

        res.status(200).json(getuser)

   }catch(err){
    res.status(404).json({ message: error.message})
   }
};

export const postUser = (req,res) => {

    // Create a new Person document
    const User = new UserModel({
        username: 'john_doe',
        password: 'hashed_password_here',
        FName: 'John',
        LName: 'Doe',
        Email: 'john@example.com',
        BD: '1990-01-01',
        Regrestration_Date: '2023-09-08',
        Status: 'Active',
        Profile_Pic: 'profile.jpg',
    });

    try{
        User.save()
        .then(() => {
        console.log('Person saved successfully.');
        })
        .catch((error) => {
        console.error('Error saving Person:', error);
        });

    }catch(err){

    res.status(409).json({ message: error.message})
    
   }
};

