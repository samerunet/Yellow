import "./App.css";
import Login from "./components/login/Login.js";
import Main from "./components/Main.js";


import { useState, useEffect } from "react";
import axios from "axios";

// first step to validate the login 👍
// second step will be to create a new user 👍
// third step will be to update password (optional)
// validated user creating a post
// any user can comment on any post

function App() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState([]);
	const [post, setPost] = useState([]);
	const [comment, setComment] = useState([]);
	const API = "https://secure-forest-62515.herokuapp.com/api";

	// FETCH - USERS
	const getUsers = () => {
		axios.get(`${API}/users`).then((response) =>
			// console.log(response.data),
			setUsers(response.data)
		);
	};
	// FETCH - POSTS
	const getPosts = () => {
		axios.get(`${API}/posts`).then((response) => setPost(response.data));
	};
	// FETCH - COMMENTS
	const getComments = () => {
		axios.get(`${API}/comments`).then((response) => setComment(response.data));
	};

	const [pageFunction, setPageFunction] = useState(true);

	const pageToggle = (post) => {
		pageFunction ? setPageFunction(false) : setPageFunction(true);
	};



	// const handleUsername = (event) => {
	// 	setUsername(event.target.value);
	// };

	// const handlePassword = (event) => {
	// 	setPassword(event.target.value);
	// };

	const handleLogin = (username, password) => {
		axios
			.put(`${API}/users/login`, {
				username: username,
				password: password,
			})
			.catch((error) => {
				if (error) {
					alert("Email or password does not match records");
				}
			})
			.then((response) => {
				setUser(response.data);
				console.log(response.data);
				if (Object.keys(response.data).length === 0) {
					console.log("something went wrong");
				} else {
					pageToggle();
				}
			});
	};


const handleCreateNewUser = (addUser) => {
	axios.post(`${API}/users`, addUser).then((response) => {
		setUsers([...users, response.data])
	})
}

	// const handleCreateuser = (event) => {
	// 	event.preventDefault();
	// 	axios
	// 		.put(`${API}/users/`, {
	// 			username: username,
	// 			password: password,
	//
	// 		})
	// 		.then((response) => {

	// 			console.log(response);
	// 		});
	// };

	useEffect(() => {
		getUsers();
		getPosts();
		getComments();
	}, []);


	return (
		<div className='App'>
			{pageFunction ? <Login handleLogin={handleLogin} /> : <Main />}
			
		</div>
	);
}

export default App;
