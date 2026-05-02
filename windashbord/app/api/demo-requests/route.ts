import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Point to the data directory in the parent folder (main project)
const DATA_FILE = path.join(process.cwd(), '..', 'data', 'demo_requests.json');

export async function GET() {
  try {
    console.log("Dashboard Demo API fetching from:", DATA_FILE);
    if (!fs.existsSync(DATA_FILE)) {
      console.log("DATA_FILE does not exist at:", DATA_FILE);
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    console.log("Dashboard Demo API found data, length:", JSON.parse(data).length);
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
