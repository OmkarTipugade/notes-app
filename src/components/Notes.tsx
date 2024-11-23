import { useState, ChangeEvent } from "react";
import NotePreview from "./NotePreview";
import NoteForm from "./NoteForm";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

interface Note {
  title: string;
  content: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");
  const [previewNote, setPreviewNote] = useState<Note | null>(null);
  const [editingNoteIndex, setEditingNoteIndex] = useState<number | null>(null);

  // Search note
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add or Edit a note
  const handleSaveNote = (): void => {
    if (noteTitle.trim() === "" || noteContent.trim() === "") return;

    if (editingNoteIndex !== null) {
      // Edit existing note
      setNotes((prevNotes) =>
        prevNotes.map((note, index) =>
          index === editingNoteIndex
            ? { title: noteTitle, content: noteContent }
            : note
        )
      );
      setEditingNoteIndex(null);
    } else {
      // Add a new note
      setNotes((prevNotes) => [
        ...prevNotes,
        { title: noteTitle, content: noteContent },
      ]);
    }

    setNoteTitle("");
    setNoteContent("");
    setIsModalOpen(false);
  };

  // Open the form for editing a note
  const handleEditNote = (index: number): void => {
    const note = notes[index];
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setEditingNoteIndex(index);
    setIsModalOpen(true);
  };

  // Delete a note
  const handleDeleteNote = (index: number): void => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  // Open the preview modal for a note
  const handlePreviewNote = (note: Note): void => {
    setPreviewNote(note);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNoteTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNoteContent(e.target.value);
  };

  return (
    <div className="bg-slate-950 h-screen">
      <div className="container p-4 mx-auto">
        <h1 className="text-6xl text-indigo-700 text-center font-bold mb-4">
          Notes
        </h1>

        {/* Search Input */}
        <input
          type="text"
          className="border text-gray-300 bg-slate-900 rounded p-2 w-full mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-700"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Add Note Button */}
        <button
          className="bg-indigo-700 text-white p-2 rounded mb-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Note
        </button>

        {/* Notes List */}
        <ul className="list-disc pl-5">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <div
                key={index}
                className="mb-2 p-2 border-2 border-indigo-700 cursor-pointer rounded-md"
              >
                <div onClick={() => handlePreviewNote(note)}>
                  <h3 className="font-semibold text-gray-300">{note.title}</h3>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditNote(index)}
                  >
                    <GrEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteNote(index)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-300">No matching notes found.</p>
          )}
        </ul>

        {/* Modal for Adding or Editing Notes */}
        {isModalOpen && (
          <NoteForm
            title={noteTitle}
            content={noteContent}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingNoteIndex(null); // Reset editing index if canceled
            }}
            onSave={handleSaveNote}
            onTitleChange={handleTitleChange}
            onContentChange={handleContentChange}
          />
        )}

        {/* Note Preview Modal */}
        {previewNote && (
          <NotePreview
            noteTitle={previewNote.title}
            noteContent={previewNote.content}
            onClose={() => setPreviewNote(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Notes;
