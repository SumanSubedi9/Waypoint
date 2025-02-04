import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function useImageCompression() {
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionError, setCompressionError] = useState(null);

  const defaultOptions = {
    maxSizeMB: 5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    initialQuality: 0.8,
    fileType: "image/webp",
  };

  const compressImage = async (file, options = defaultOptions) => {
    try {
      if (!file) return file;

      if (file.size <= 5 * 1024 * 1024) {
        return file; // Skip compression if under 5MB
      }

      setIsCompressing(true);
      setCompressionError(null);

      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      setCompressionError(error.message);
      throw error;
    } finally {
      setIsCompressing(false);
    }
  };

  return { compressImage, isCompressing, compressionError };
}
