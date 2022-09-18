import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login.js";
import Signup from "./components/login/Signup.js";
import { useState } from "react";
import Main from "./components/Main.js";
import Nav from "./components/navbar/Navbar.js";
import Left from "./components/sidebarLeft/SidebarLeft.js";
import Right from "./components/sidebarRight/SidebarRight.js";
import New from "./components/sidebarRight/Posticon";

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
	const [comment, setComment] = useState([]);
	const [permission, setPermission] = useState(false);

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
							/>
						</ProtectedRoute>
					}
				/>

				<Route path='/addpost' element={<New />} />

				<Route path='/contact' element={<div>contact page</div>} />
			</Routes>
		</BrowserRouter>
	);
}
