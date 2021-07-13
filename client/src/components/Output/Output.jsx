import { useNotesContext } from "../../context/notesContext";

const Output = (props) => {
	console.log(props);

	const { notes, setNotes } = useNotesContext([]);

	return notes.map((el, i) => (
		<div key={i}>
			<div>{el.title}</div>
			<div>{el.text}</div>
		</div>
	));
};

export default Output;
