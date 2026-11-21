import { NextRequest, NextResponse } from 'next/server';

const p = "1234";
const e = "femi@gmail.com";

export async function POST(req: NextRequest) {
  // 1. Parse the incoming JSON body asynchronously
  const body = await req.json();

    const { email, password, username } = body;
    
    if ((email !== e) || (password !== p)) {
        return NextResponse.json({message: "Invalid credentials"})
    }

    const token1 = "user_id1234";

    const token2 = "user_id12345678";
  
  // 2. Do something with the parsed data...
    const response = NextResponse.json({ message: "Success", username, token1 });
    
    response.headers.set('token', token2);
    response.headers.set('X-RateLimit-Limit', '100');
    response.headers.set('Access-Control-Allow-Origin', '*');

    return response;
}