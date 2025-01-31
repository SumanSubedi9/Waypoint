import { useState, useRef } from "react";
import styles from "./ImageUpload.module.css";
import Button from "../../components/Button";
import { FiUpload } from "react-icons/fi";

function ImageUpload() {
  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
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
        onChange={handleFileChange}
      />
      <Button style="primary" onClick={handleButtonClick}>
        <FiUpload className={styles.inputIcon} />
        Upload Image
      </Button>
      {fileName && <p>{fileName}</p>}
    </div>
  );
}

export default ImageUpload;
