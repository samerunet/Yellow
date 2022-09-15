import "./App.css";
import Login from "./components/login/Login.js";
import Nav from "./components/navbar/Navbar.js";
import Feed from "./components/feed/Feed.js";
import Left from "./components/sidebarLeft/SidebarLeft.js";
import Right from "./components/sidebarRight/SidebarRight.js";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [incoming, setIncoming] = useState([]);
	const [username, setUsername] = useState(" ");
	const [password, setPassword] = useState(" ");
	const API = "http://localhost:8000";

	// useEffect(() => {
	// 	axios.get(`${API}/admin`).then((response) => {
	// 		setIncoming(response.data);
	// 	});
	// }, []);
	// const getIncoming = () => {
	// 	axios
	// 		.get(`${API}/api/users`)
	// 		.then(
	// 			(response) => setIncoming(response.data),
	// 			(err) => console.error(err)
	// 		)
	// 		.catch((error) => console.error(error));
	// };

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleLogin = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/login/`, {
				username: username,
				password: password,
			})
			// .catch((error) => {
			// 	if (error) {
			// 		alert("Email or password does not match records");
			// 	}
			// })
			.then((response) => {
				// console.log(userAccount)
				console.log(response.data);
				setIncoming(response.data.email);
				setIncoming(response.data.id);
			});
	};

	// useEffect(() => {
	// 	getIncoming();
	// }, []);

	const MainContent = (event) => {
		return (
			<>
				<div class="flex h-screen ">
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="nav">
      <Nav/>
    </header>
    <div class="flex h-full">
      <nav class="flex w-72 h-full ">
        <div class="w-full flex mx-auto px-6 py-8">
          <Left/>
        </div>
      </nav>
      <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div class="flex w-full mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full text-gray-900 text-xl ">
            <Feed/>
          </div>
        </div>
      </main>
      <nav class="flex w-72 h-full ">
        <div class="w-full flex mx-auto px-6 py-8">
          <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl "><Right/></div>
        </div>
      </nav>
    </div>
  </div>
</div>
			</>
		);
	};

	return (
		<div className='App'>
			{/* <Login /> */}
			<MainContent />
		</div>
	);
}

export default App;
