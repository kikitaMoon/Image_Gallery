import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import mime from "mime-types";

const SHARED_RESOURCES_PATH = path.join(process.cwd(), "..", "demo-gallery-deployment", "resources");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathArray } = await params;
    const filePath = path.join(SHARED_RESOURCES_PATH, ...pathArray);
    
    // Security check: ensure the file path is within the shared resources directory
    const resolvedPath = path.resolve(filePath);
    const resolvedResourcesPath = path.resolve(SHARED_RESOURCES_PATH);
    
    if (!resolvedPath.startsWith(resolvedResourcesPath)) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }
    
    if (!existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
    
    const fileBuffer = await readFile(filePath);
    const mimeType = mime.lookup(filePath) || "application/octet-stream";
    
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving file:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}