"use client";

import { MediaItem } from "./Gallery";
import { MediaCard } from "./MediaCard";

interface MediaGridProps {
  media: MediaItem[];
  viewMode: "grid" | "list";
  onItemClick: (item: MediaItem) => void;
  onItemDelete: (id: string) => void;
}

export function MediaGrid({ media, viewMode, onItemClick, onItemDelete }: MediaGridProps) {
  if (media.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-slate-400 dark:text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
          No media yet
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          Upload some images or videos to get started
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
      }
    >
      {media.map((item, index) => (
        <div
          key={item.id}
          className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <MediaCard
            item={item}
            viewMode={viewMode}
            onClick={() => onItemClick(item)}
            onDelete={() => onItemDelete(item.id)}
          />
        </div>
      ))}
    </div>
  );
}