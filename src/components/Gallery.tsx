"use client";

import { useState, useCallback, useEffect } from "react";
import { MediaGrid } from "./MediaGrid";
import { Lightbox } from "./Lightbox";
import { Button } from "./ui/button";
import { Grid, List, RefreshCw } from "lucide-react";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  createdAt: Date | string;
  size?: number;
  originalName?: string;
}

export function Gallery() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(true);

  // Fetch media from API
  const fetchMedia = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/media");
      const data = await response.json();
      
      if (data.success) {
        // Convert string dates back to Date objects
        const mediaWithDates = data.media.map((item: MediaItem) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
        setMedia(mediaWithDates);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load media on component mount
  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // No upload/delete functionality - files managed via server filesystem

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            disabled={loading}
          >
            <Grid className="w-4 h-4 mr-2" />
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
            disabled={loading}
          >
            <List className="w-4 h-4 mr-2" />
            List
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={fetchMedia}
          disabled={loading}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-none"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh Gallery
        </Button>
      </div>

      {/* Media Grid */}
      <MediaGrid
        media={media}
        viewMode={viewMode}
        onItemClick={setSelectedItem}
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
        <br />
        <span className="text-xs opacity-75">Managed via: ../demo-gallery-deployment/resources/</span>
      </div>
    </div>
  );
}