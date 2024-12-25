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

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if the user exists by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Optionally, you can return a user object or JWT token here
    return NextResponse.json(
      { message: 'Login successful', user },
      { status: 200 }
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
