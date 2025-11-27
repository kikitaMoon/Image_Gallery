"use client";

import { useState, useCallback } from "react";
import { MediaGrid } from "./MediaGrid";
import { UploadArea } from "./UploadArea";
import { Lightbox } from "./Lightbox";
import { Button } from "./ui/button";
import { Upload, Grid, List } from "lucide-react";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  createdAt: Date;
}

// Demo data
const initialMedia: MediaItem[] = [
  {
    id: "1",
    type: "image",
    src: "/demo-1.png",
    title: "Dashboard Analytics",
    description: "Modern dashboard with analytics and data visualization",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    type: "image",
    src: "/demo-2.png",
    title: "Mobile E-commerce App",
    description: "Clean mobile shopping interface design",
    createdAt: new Date("2024-01-16"),
  },
  {
    id: "3",
    type: "image",
    src: "/demo-3.png",
    title: "Creative Agency Website",
    description: "Bold and vibrant landing page design",
    createdAt: new Date("2024-01-17"),
  },
  {
    id: "4",
    type: "video",
    src: "/demo-video.mp4",
    title: "App Demo Video",
    description: "Interactive demonstration of web application features",
    createdAt: new Date("2024-01-18"),
  },
];

export function Gallery() {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showUpload, setShowUpload] = useState(false);

  const handleUpload = useCallback((files: File[]) => {
    const newItems: MediaItem[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      type: file.type.startsWith("image") ? "image" : "video",
      src: URL.createObjectURL(file),
      title: file.name,
      description: `Uploaded ${file.type.startsWith("image") ? "image" : "video"}`,
      createdAt: new Date(),
    }));

    setMedia((prev) => [...newItems, ...prev]);
    setShowUpload(false);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setMedia((prev) => prev.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  }, [selectedItem]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="w-4 h-4 mr-2" />
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4 mr-2" />
            List
          </Button>
        </div>
        
        <Button
          onClick={() => setShowUpload(!showUpload)}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Upload Area */}
      {showUpload && (
        <div className="animate-in slide-in-from-top-2 duration-300">
          <UploadArea onUpload={handleUpload} onCancel={() => setShowUpload(false)} />
        </div>
      )}

      {/* Media Grid */}
      <MediaGrid
        media={media}
        viewMode={viewMode}
        onItemClick={setSelectedItem}
        onItemDelete={handleDelete}
      />

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={() => {
            const currentIndex = media.findIndex((item) => item.id === selectedItem.id);
            const nextIndex = (currentIndex + 1) % media.length;
            setSelectedItem(media[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = media.findIndex((item) => item.id === selectedItem.id);
            const prevIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
            setSelectedItem(media[prevIndex]);
          }}
        />
      )}

      {/* Stats */}
      <div className="text-center text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 rounded-full px-6 py-2 backdrop-blur-sm border border-slate-200 dark:border-slate-700 inline-block">
        {media.length} items in gallery • {media.filter(m => m.type === "image").length} images • {media.filter(m => m.type === "video").length} videos
      </div>
    </div>
  );
}