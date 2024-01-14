import { useState } from "react";
import barCodeIcon from "../../../assets/barCodeIcon.svg";
import "./searchBarCode.css";
export default function BarImgSearch() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="barCodeImgScannerContainer">
      <div className="barCodeImgScanner">
        <div>
          {!selectedImage ? <h1>Bar Code Image</h1> : <h1>{selectedImage.name}</h1>}
          {/* <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />  */}
        </div>

        <label
          htmlFor="fileInput"
          style={{ cursor: "pointer", display: "block" }}
        >
          <img
            src={barCodeIcon}
            alt="Barcode Icon"
            style={{ width: "50px", height: "50px" }}
          />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
}
