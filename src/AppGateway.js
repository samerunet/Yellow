import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login.js";
import Signup from "./components/login/Signup.js";
import { useState } from "react";
import Main from "./components/Main.js";
import Nav from "./components/navbar/Navbar.js";
import New from "./components/sidebarRight/Posticon";
import Posticon from "./components/sidebarRight/Posticon";

const ProtectedRoute = ({ permission, children }) => {
	if (!permission) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default function AppGateway() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState([]);
	const [post, setPost] = useState([]);
	const [comments, setComment] = useState([]);
	const [permission, setPermission] = useState(false);
	const API = "https://secure-forest-62515.herokuapp.com/api";

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path='/login'
					element={<Login setUser={setUser} setPermission={setPermission} />}
				/>
				<Route
					path='/signup'
					element={<Signup setPermission={setPermission} />}
				/>

				<Route
					path='/'
					element={
						<ProtectedRoute permission={permission}>
							<Main
								setUsers={setUsers}
								setPost={setPost}
								setComment={setComment}
								users={users}
								post={post}
								user={user}
								API={API}
								comments={comments}
							/>
						</ProtectedRoute>
					}
				/>

				<Route path='/addpost' element={<New />} />

				<Route path='/contact' element={<div>contact page</div>} />
				<Route
					path='/messenger'
					element={<div>This part of application is under construction</div>}
				/>
				<Route
					path='/friends'
					element={
						<div>
							This part of application should be able to interact between users
						</div>
					}
				/>
				<Route path='/newpost' element={<Posticon user={user} API={API} />} />
			</Routes>
		</BrowserRouter>
	);
}
