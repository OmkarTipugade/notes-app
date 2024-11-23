import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

// Save a new note
export const saveNote = async (
  userId: string,
  title: string,
  content: string
) => {
  await addDoc(collection(db, "notes"), {
    userId,
    title,
    content,
    createdAt: new Date(),
  });
};

// Fetch all notes for a user
export const fetchNotes = async (userId: string) => {
  const q = query(collection(db, "notes"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update an existing note
export const updateNote = async (
  id: string,
  title: string,
  content: string
) => {
  await updateDoc(doc(db, "notes", id), { title, content });
};

// Delete a note
export const deleteNote = async (id: string) => {
  await deleteDoc(doc(db, "notes", id));
};
