const TodoNew = (props) => {
  console.log(">> check props:", props);
  const { addNewTodo } = props;
  //addNewTodo("Kim Cuong cute qué chừng");
  const handleClick = () => {
    alert("click me");
  };
  // const handleOnchange = (event) => {
  //   console.log(">>handle on change", event.target.value);
  // };
  const handleOnchange = (name) => {
    console.log(">>handle on change", name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        /*onChange={handleOnchange}*/ onChange={(event) =>
          handleOnchange(event.target.value)
        }
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
export default TodoNew;
