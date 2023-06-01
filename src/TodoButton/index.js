import "./TodoButton.css";

function TodoButton({ setOpenModal }) {
  return (
    <button
      className="TodoButton"
      onClick={(event) => {
        setOpenModal(state=> !state);
      }
    }
    >+
    </button>
  );
}
export { TodoButton };
