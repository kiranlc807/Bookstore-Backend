import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const newUser = async (user) => {
    const userdata = await User.findOne({
      email:user.email
    });
    if(userdata){
      throw new Error("User Already Exist");
    }
    else{
      const saltRound = 10;
      user.password = await bcrypt.hash(user.password,saltRound);
      const newUser = await User.create(user);
      return newUser;
    }
}

export const login = async (body) =>{
  const user = await User.findOne({
    email:body.email
  });
  if(!user){
    throw new Error("User Not Found!");
  }
  const result = await bcrypt.compare(body.password,user.password);
  if(!result){
    throw new Error("Incorrect Password");
  }else{
    return jwt.sign({userId:user._id},process.env.SECRET_KEY);
  }
}
