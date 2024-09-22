import React from "react";
import { useState } from "react";
import defaultImage from "../../assets/imgs/clone of photo.png";

export default function InputPic() {
  const [file, setFile] = useState("");

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="inputPic-container">
        <img
          src={file || defaultImage}
          alt=""
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            border: `2px solid rgba(35, 193, 255, 1)`,
          }}
        />
      </div>
      <input
        type="file"
        id="upload"
        style={{ display: "none" }}
        value={""}
        onChange={handleUpload}
      />
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="upload">
          <span
            style={{
              color: "#23C1FF",
              fontSize: "14px",
              textDecoration: "underLine",
              cursor: "pointer",
            }}
          >
            upload your photo
          </span>
        </label>
      </div>
    </div>
  );
}
