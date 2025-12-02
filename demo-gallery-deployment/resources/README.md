# Demo Gallery Resources

This directory contains the media files for your Demo Gallery website.

## Directory Structure

```
resources/
├── images/          # Image files (JPG, PNG, GIF, WebP, BMP, SVG)
└── videos/          # Video files (MP4, WebM, OGG, AVI, MOV, WMV, FLV, MKV)
```

## How to Manage Media Files

### Adding New Media
1. **Images**: Copy image files to the `images/` directory
2. **Videos**: Copy video files to the `videos/` directory
3. **Refresh**: Click the "Refresh Gallery" button on the website to see new files

### Removing Media
1. **Delete Files**: Remove files from the respective directories
2. **Refresh**: Click the "Refresh Gallery" button to update the gallery

### Supported File Types

**Images:**
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- BMP (.bmp)
- SVG (.svg)

**Videos:**
- MP4 (.mp4)
- WebM (.webm)
- OGG (.ogg)
- AVI (.avi)
- MOV (.mov)
- WMV (.wmv)
- FLV (.flv)
- MKV (.mkv)

## File Naming Tips

- Use descriptive names for better gallery display
- Avoid special characters (they will be replaced with spaces in titles)
- Underscores and hyphens will be converted to spaces in titles
- File modification date determines the order in the gallery (newest first)

## Remote Desktop Access

This directory is designed for easy management via Windows Remote Desktop:

1. Connect to your server via Remote Desktop
2. Navigate to the `demo-gallery-deployment/resources/` folder
3. Use Windows Explorer to add, remove, or organize files
4. Refresh the gallery website to see changes

## Example

After adding a file named `my-awesome-screenshot.png` to the `images/` directory:
- **Gallery Title**: "my awesome screenshot"
- **Description**: "Image file (PNG)"
- **URL**: `/resources/images/my-awesome-screenshot.png`

The gallery will automatically detect the new file when refreshed!