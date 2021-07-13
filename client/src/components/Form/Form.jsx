import { useContext, useEffect, useState } from "react";
import { useNotesContext } from "../../context/notesContext";

const Form = () => {
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");

	const { notes, setNotes } = useNotesContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		setNotes([...notes, { title, text }]);
		setText("");
		setTitle("");
	};

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleText = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		console.log(notes);
	}, [notes]);

	return (
		<form onSubmit={handleSubmit}>
			<p>text1</p>
			<div>
				<input type="text" placeholder="title" value={title} onChange={handleTitle} />
			</div>

			<p>text1</p>
			<div>
				<input type="text" placeholder="text" value={text} onChange={handleText} />
			</div>
			<input type="submit" />
		</form>
	);
};

export default Form;
