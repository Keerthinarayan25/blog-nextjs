import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {

  const { username, email, password } = await req.json();
  await dbConnect();

  const existingUser = await User.findOne({ email });

  if(existingUser){
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword
  });
  return NextResponse.json({ message: 'User registerd successfully', user:{
    id: newUser._id.toString(),
    name: newUser.name,
    email: newUser.email,
  }}, { status: 201 });
  

}