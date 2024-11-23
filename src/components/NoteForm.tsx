import React, { ChangeEvent } from "react";

interface NoteFormProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  title,
  content,
  isOpen,
  onClose,
  onSave,
  onTitleChange,
  onContentChange,
}) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Add a new note</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Title</label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="Enter note title..."
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            className="border rounded p-2 w-full"
            placeholder="Enter note content..."
            value={content}
            onChange={onContentChange}
          ></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="text-gray-300 bg-black p-2  rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-700 text-white p-2 rounded"
            onClick={onSave}
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
