"use client";

import { useState } from "react";
import { MediaItem } from "./Gallery";
import { Button } from "./ui/button";
import { Play, Trash2, Calendar, FileImage, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaCardProps {
  item: MediaItem;
  viewMode: "grid" | "list";
  onClick: () => void;
  onDelete: () => void;
}

export function MediaCard({ item, viewMode, onClick, onDelete }: MediaCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  if (viewMode === "list") {
    return (
      <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 group">
        {/* Thumbnail */}
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
          {item.type === "image" ? (
            <>
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {!imageError ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-300",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <FileImage className="w-6 h-6" />
                </div>
              )}
            </>
          ) : (
            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
              <Video className="w-6 h-6 text-slate-500 dark:text-slate-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white ml-0.5" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
            {item.description}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {formatDate(item.createdAt)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button size="sm" variant="outline" onClick={onClick}>
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-600 hover:text-red-700 hover:border-red-300"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1">
      {/* Media */}
      <div className="relative aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
        {item.type === "image" ? (
          <>
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {!imageError ? (
              <img
                src={item.src}
                alt={item.title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-300 cursor-pointer group-hover:scale-105",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onClick={onClick}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 cursor-pointer" onClick={onClick}>
                <FileImage className="w-12 h-12" />
              </div>
            )}
          </>
        ) : (
          <div 
            className="relative w-full h-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center cursor-pointer group-hover:bg-slate-300 dark:group-hover:bg-slate-500 transition-colors duration-300"
            onClick={onClick}
          >
            <Video className="w-12 h-12 text-slate-500 dark:text-slate-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        )}

        {/* Delete Button */}
        <Button
          size="sm"
          variant="destructive"
          className="absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Trash2 className="w-4 h-4" />
        </Button>

        {/* Type Badge */}
        <div className="absolute top-2 left-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
            {item.type === "image" ? (
              <FileImage className="w-3 h-3" />
            ) : (
              <Video className="w-3 h-3" />
            )}
            {item.type}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            <Calendar className="w-3 h-3" />
            {formatDate(item.createdAt)}
          </div>
          <Button
            size="sm"
            onClick={onClick}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}