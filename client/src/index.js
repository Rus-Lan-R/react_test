import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NotesContextProvider } from "./context/notesContext";

ReactDOM.render(
	<React.StrictMode>
		<NotesContextProvider>
			<App />
		</NotesContextProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
