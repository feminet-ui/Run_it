import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // 1. Parse the incoming JSON body asynchronously
  const body = await req.json();

  const { email, username } = body;
  
  // 2. Do something with the parsed data...
  return NextResponse.json({ message: email, email, username});
}