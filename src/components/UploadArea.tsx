"use client";

import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Upload, X, FileImage, Video, File } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadAreaProps {
  onUpload: (files: File[]) => Promise<void>;
  onCancel: () => void;
  uploading?: boolean;
}

export function UploadArea({ onUpload, onCancel, uploading = false }: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/") || file.type.startsWith("video/")
    );
    
    setSelectedFiles(files);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/") || file.type.startsWith("video/")
      );
      setSelectedFiles(files);
    }
  }, []);

  const handleUpload = useCallback(async () => {
    if (selectedFiles.length > 0) {
      await onUpload(selectedFiles);
      setSelectedFiles([]);
    }
  }, [selectedFiles, onUpload]);

  const removeFile = useCallback((index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <FileImage className="w-5 h-5" />;
    if (file.type.startsWith("video/")) return <Video className="w-5 h-5" />;
    return <File className="w-5 h-5" />;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 p-8 shadow-lg dark:shadow-slate-900/20">
      {/* Upload Area */}
      <div
        className={cn(
          "relative rounded-lg border-2 border-dashed p-12 text-center transition-all duration-300",
          uploading
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950/20 cursor-not-allowed"
            : isDragOver
            ? "border-violet-400 bg-violet-50 dark:bg-violet-950/20"
            : "border-slate-300 dark:border-slate-600 hover:border-violet-300 dark:hover:border-violet-600"
        )}
        onDrop={uploading ? undefined : handleDrop}
        onDragOver={uploading ? undefined : handleDragOver}
        onDragLeave={uploading ? undefined : handleDragLeave}
      >
        <div className={cn(
          "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
          uploading
            ? "bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/50 dark:to-sky-900/50"
            : "bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/50 dark:to-indigo-900/50"
        )}>
          <Upload className={cn(
            "w-8 h-8",
            uploading
              ? "text-blue-600 dark:text-blue-400 animate-bounce"
              : "text-violet-600 dark:text-violet-400"
          )} />
        </div>
        
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
          {uploading ? "Uploading files..." : "Drop files here"}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          {uploading ? "Please wait while files are being uploaded" : "Or click to select images and videos"}
        </p>
        
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          className={cn(
            "absolute inset-0 w-full h-full opacity-0",
            uploading ? "cursor-not-allowed" : "cursor-pointer"
          )}
          onChange={uploading ? undefined : handleFileSelect}
          disabled={uploading}
        />
        
        <Button variant="outline" className="pointer-events-none" disabled={uploading}>
          {uploading ? "Uploading..." : "Choose Files"}
        </Button>
      </div>

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h4 className="font-medium text-slate-700 dark:text-slate-300">
            Selected Files ({selectedFiles.length})
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
              >
                <div className="text-slate-500 dark:text-slate-400">
                  {getFileIcon(file)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                    {file.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {formatFileSize(file.size)}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeFile(index)}
                  className="text-slate-400 hover:text-red-600"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <Button variant="outline" onClick={onCancel} disabled={uploading}>
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
          disabled={selectedFiles.length === 0 || uploading}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Upload className="w-4 h-4 mr-2 animate-bounce" />
              Uploading...
            </>
          ) : (
            <>
              Upload {selectedFiles.length > 0 && `(${selectedFiles.length})`}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}