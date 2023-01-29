import React, { useState } from "react";
import List from "./list.jsx";

const Home = () => {
	const [todoItem, setTodoItem] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handlerNewItem = (e) => {
		if (e.key === "Enter" && e.target.value != "") {
			setTodoList([...todoList, todoItem]);
			setTodoItem("");
		}
	}

	
	const handleRemoveItem = (e, index) => {
		e.preventDefault();
		setTodoList(todoList.filter((_, i) => i !== index));
	}


	return (
		<div className="container my-sm-2 my-lg-5 mx-auto p-lg-5 ">
			<h1 className="text-center fw-bolder text-light">To-do List</h1>
			<div className="container">
				<input
					type="text"
					name="todo"
					id="todo"
					className="fs-3 w-100 mx-auto border border-light rounded"
					onChange={(e) => setTodoItem(e.target.value)}
					onKeyDown={handlerNewItem}
					value={todoItem}
					placeholder="Add a new todo"
				/>
				<ul className="list-group list-group-flush fs-3">
					<List items={todoList} onRemoveItem={handleRemoveItem}></List>
				</ul>
				<div className={`p-2 mt-1 bg-light rounded ${todoList.length > 0 ? "border-top" : ""}`}>
					<small >{`${todoList.length} item${todoList.length == 1 ? "" : "s"} left`}</small>
				</div>
			</div>
		</div>
	);
};

export default Home;
