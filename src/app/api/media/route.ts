import { NextResponse } from "next/server";
import { readdir, stat } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const SHARED_RESOURCES_PATH = path.join(process.cwd(), "..", "demo-gallery-deployment", "resources");
const IMAGES_DIR = path.join(SHARED_RESOURCES_PATH, "images");
const VIDEOS_DIR = path.join(SHARED_RESOURCES_PATH, "videos");

// Supported file extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"];
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".avi", ".mov", ".wmv", ".flv", ".mkv"];

// Scan directory for media files
async function scanMediaFiles() {
  const mediaItems: any[] = [];
  
  // Scan images directory
  if (existsSync(IMAGES_DIR)) {
    try {
      const imageFiles = await readdir(IMAGES_DIR);
      for (const file of imageFiles) {
        const ext = path.extname(file).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          const filePath = path.join(IMAGES_DIR, file);
          const stats = await stat(filePath);
          
          mediaItems.push({
            id: path.basename(file, ext).replace(/[^a-zA-Z0-9]/g, "-"),
            type: "image",
            src: `/resources/images/${file}`,
            title: path.basename(file, ext).replace(/[-_]/g, " "),
            description: `Image file (${ext.slice(1).toUpperCase()})`,
            createdAt: stats.mtime.toISOString(),
            size: stats.size,
            originalName: file,
          });
        }
      }
    } catch (error) {
      console.error("Error scanning images directory:", error);
    }
  }
  
  // Scan videos directory
  if (existsSync(VIDEOS_DIR)) {
    try {
      const videoFiles = await readdir(VIDEOS_DIR);
      for (const file of videoFiles) {
        const ext = path.extname(file).toLowerCase();
        if (VIDEO_EXTENSIONS.includes(ext)) {
          const filePath = path.join(VIDEOS_DIR, file);
          const stats = await stat(filePath);
          
          mediaItems.push({
            id: path.basename(file, ext).replace(/[^a-zA-Z0-9]/g, "-"),
            type: "video",
            src: `/resources/videos/${file}`,
            title: path.basename(file, ext).replace(/[-_]/g, " "),
            description: `Video file (${ext.slice(1).toUpperCase()})`,
            createdAt: stats.mtime.toISOString(),
            size: stats.size,
            originalName: file,
          });
        }
      }
    } catch (error) {
      console.error("Error scanning videos directory:", error);
    }
  }
  
  // Sort by creation time (newest first)
  return mediaItems.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function GET() {
  try {
    const mediaItems = await scanMediaFiles();
    return NextResponse.json({
      success: true,
      media: mediaItems,
      total: mediaItems.length,
      images: mediaItems.filter(item => item.type === "image").length,
      videos: mediaItems.filter(item => item.type === "video").length,
    });
  } catch (error) {
    console.error("Get media error:", error);
    return NextResponse.json(
      { error: "Failed to get media items" },
      { status: 500 }
    );
  }
}