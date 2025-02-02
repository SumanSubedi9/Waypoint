import { useState, useRef, useEffect } from "react";
import styles from "./ImageUpload.module.css";
import Button from "../../components/Button";
import { FiUpload } from "react-icons/fi";
import { useUploadTravelPicture } from "../../hooks/useUploadTravelPicture";
import { useUser } from "../../authentication/useUser.js";
import { useCities } from "../../context/CitiesContext.jsx";

function ImageUpload() {
  const fileInputRef = useRef(null);
  const { userId } = useUser();
  const { currentCity } = useCities();

  const [imageUrl, setImageUrl] = useState(null);

  const { mutate, isPending } = useUploadTravelPicture();

  useEffect(() => {
    if (currentCity?.imageUrl) {
      setImageUrl(currentCity.imageUrl);
    }
  }, [currentCity]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const cityId = currentCity?.id;
    console.log(cityId);
    if (file) {
      mutate(
        { file, userId, id: cityId },
        {
          onSuccess: (url) => {
            setImageUrl(url);
            fileInputRef.current.value = "";
          },
        }
      );
    }
  };

  // Trigger the file input when the button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
        <div className="image-preview">
          <img
            src={imageUrl}
            alt="Uploaded travel"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      ) : (
        <Button style="primary" onClick={handleButtonClick}>
          <FiUpload className={styles.inputIcon} />
          {isPending ? "Uploading..." : "Upload Image"}
        </Button>
      )}
    </div>
  );
}

export default ImageUpload;
