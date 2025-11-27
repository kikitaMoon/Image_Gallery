"use client";

import { useEffect, useCallback } from "react";
import { MediaItem } from "./Gallery";
import { Button } from "./ui/button";
import { X, ChevronLeft, ChevronRight, Download, Calendar, FileImage, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  item: MediaItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyPress]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = item.src;
    link.download = item.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 dark:bg-black/95 backdrop-blur-sm animate-in fade-in-0 duration-300">
      {/* Background */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Navigation */}
      <Button
        size="lg"
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none"
        onClick={onPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        size="lg"
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none"
        onClick={onNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Close Button */}
      <Button
        size="lg"
        variant="ghost"
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="relative max-w-7xl w-full">
          {/* Media */}
          <div className="relative flex items-center justify-center mb-6">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            ) : (
              <video
                src={item.src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            )}
          </div>

          {/* Info Panel */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-2xl text-white animate-in slide-in-from-bottom-4 duration-300 delay-150">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  {item.type === "image" ? (
                    <FileImage className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Video className="w-5 h-5 text-purple-400" />
                  )}
                  <span className="text-sm font-medium text-slate-300 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                {item.description && (
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                )}
              </div>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDownload}
                className="bg-white/10 hover:bg-white/20 text-white border-none"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                {formatDate(item.createdAt)}
              </div>
              <div className="text-sm text-slate-400">
                Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd> to close
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}