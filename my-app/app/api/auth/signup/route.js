import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json().catch((err) => {
      console.error('Error parsing JSON:', err);
      return null;
    });

    if (!body) {
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    console.log('Request Body:', body); // Debug log

    const { username, password, email } = body;

    if (!username || !password || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', user },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error object:', error); // Log the full error object for debugging

    const errorMessage = error?.message || 'Internal Server Error';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
