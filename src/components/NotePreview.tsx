interface NotePreviewModalProps {
  noteTitle: string;
  noteContent: string;
  onClose: () => void;
}

const NotePreview = ({
  noteTitle,
  noteContent,
  onClose,
}: NotePreviewModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Note Preview</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Title</label>
          <p className="border rounded p-2 bg-gray-100">{noteTitle}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Content</label>
          <p className="border rounded p-2 bg-gray-100">{noteContent}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-indigo-700 text-white p-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotePreview;
