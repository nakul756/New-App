"use client";

// File Upload component for product images
// TODO: Implement drag-and-drop with preview

interface FileUploadProps {
  onUpload: (file: File) => void;
  accept?: string;
}

export function FileUpload({ onUpload, accept = "image/*" }: FileUploadProps) {
  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center">
      <p className="text-sm text-muted-foreground">
        Drag and drop a file, or click to upload
      </p>
      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onUpload(file);
        }}
        className="mt-2"
      />
    </div>
  );
}
