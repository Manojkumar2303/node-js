import React from "react";
import UploadForm from "./components/UploadForm";
import FileList from "./components/FileList";

function App() {
  const refreshFiles = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📂 File Upload Manager
      </h1>
      <UploadForm onUploadSuccess={refreshFiles} />
      <FileList />
    </div>
  );
}

export default App;
