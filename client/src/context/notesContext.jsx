import { createContext, useContext, useState } from "react";

const notesContext = createContext();

export const NotesContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	return <notesContext.Provider value={{ notes, setNotes }}>{children}</notesContext.Provider>;
};

export const useNotesContext = () => useContext(notesContext);
