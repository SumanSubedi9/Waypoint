import { useState, useRef, useEffect } from "react";
import styles from "./ImageUpload.module.css";
import Button from "../../components/Button";
import { FiUpload } from "react-icons/fi";
import { useUploadTravelPicture } from "../../hooks/useUploadTravelPicture";
import { useUser } from "../../authentication/useUser.js";
import { useCities } from "../../context/CitiesContext.jsx";
import { deleteImageFromDatabase } from "../../services/apiImage.js";
import { IoCloseOutline } from "react-icons/io5";
import useImageCompression from "../../hooks/useImageCompression.js";

import Modal from "react-modal-image";

function ImageUpload() {
  const fileInputRef = useRef(null);
  const { userId } = useUser();
  const { currentCity, updateCity } = useCities();
  const { compressImage, isCompressing, compressionError } =
    useImageCompression();

  const [imageUrl, setImageUrl] = useState(null);

  const { mutate, isPending } = useUploadTravelPicture();

  useEffect(() => {
    if (currentCity?.imageUrl) {
      setImageUrl(currentCity.imageUrl);
    }
  }, [currentCity]);

  // Handle function for when the user selects an image

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    const cityId = currentCity?.id;

    if (!file) return;

    try {
      // Use the custom hook's compression function
      const processedFile = await compressImage(file);

      mutate(
        { file: processedFile, userId, id: cityId },
        {
          onSuccess: (url) => {
            setImageUrl(url);
            fileInputRef.current.value = "";
          },
        }
      );
    } catch (error) {
      console.error("Upload failed:", error);
      alert(compressionError || "File upload failed. Please try again.");
    }
  };

  // Trigger the file input when the button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle Delete function when the button is clicked
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await deleteImageFromDatabase(imageUrl, currentCity.id);
      setImageUrl(null);

      // This updates both context and database
      await updateCity(currentCity.id, { imageUrl: null });
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
  return (
    <div className={styles.imageUpload}>
      <input
        className={styles.fileInput}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={isPending}
      />

      {imageUrl ? (
        <div className={styles.imageContainer}>
          <button className={styles.closeBtn}>
            <IoCloseOutline
              className={styles.closeIcon}
              onClick={handleDelete}
            />
          </button>
          <div className={styles.imagePreview}>
            <div className={styles.imageCaption}>
              <h3>Your time in {currentCity?.cityName}</h3>
              <p>Tap to view full size</p>
            </div>
            <Modal
              small={imageUrl}
              large={imageUrl}
              alt="Uploaded travel Photo"
            />
          </div>
        </div>
      ) : (
        <Button style="primary" onClick={handleButtonClick}>
          <FiUpload className={styles.inputIcon} />
          {isCompressing
            ? "Compressing..."
            : isPending
            ? "Uploading..."
            : "Upload Image"}
        </Button>
      )}
    </div>
  );
}

export default ImageUpload;
