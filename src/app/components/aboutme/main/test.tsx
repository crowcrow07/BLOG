"use client";

// client/components/ImageUpload.js
import React, { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const uploadImage = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/test", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log("hi", result);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <input type="file" id="imageInput" onChange={handleFileChange} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
