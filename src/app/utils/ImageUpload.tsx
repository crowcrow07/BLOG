import React from "react";

interface ImageUploadProps {
  onUpload: (imageUrl: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file); // 'image'는 서버 측에서 기대하는 필드 이름입니다.

      try {
        const response = await fetch("http://localhost:3000/api/img-upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        const imageUrl = data.fileName;
        onUpload(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  return <input type="file" onChange={handleFileChange} />;
};

export default ImageUpload;
