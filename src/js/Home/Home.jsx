import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import component
import ToDoList from "../components/ToDoList";

//create your first component
const Home = () => {
	return (
		<>
            <ToDoList />
		</>
	);
};

export default Home;