import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const query = body.query;

    const encodedQuery = encodeURIComponent(query);
    const finalQuery = `https://vishalpainjane-shl-assignment.hf.space/recommend?query=${encodedQuery}&max_results=5`;

    const response = await fetch(finalQuery);
    const data = await response.json();

    return NextResponse.json({
      results: data.recommendations,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid request body",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
