import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Point to the data directory in the parent folder (main project)
const DATA_FILE = path.join(process.cwd(), '..', 'data', 'contacts.json');

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
