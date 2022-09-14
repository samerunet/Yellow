// ///////CREATE USER - new user login //////////
// const userSignup = (addUser) => {
// 	axios
// 		// .post(localUsersUrl, addUser)
// 		.post(herokuUsersUrl, addUser)
// 		.then((response) => {
// 			console.log(response);
// 			// getUsers()
// 			setUsers([...users, addUser]);
// 			props.setView("login");
// 		});
// };
// ////////////////////////////////////////////////////////////
// // CRUD Functionality - USERS (api/useraccount/login)
// //      // returning user login
// ////////////////////////////////////////////////////////////
// // returning user login
// const handleUpdateUser = (userAccount) => {
// 	axios
// 		// .put(localLoginUrl, userAccount)
// 		.put(herokuLoginUrl, userAccount)
// 		.catch((error) => {
// 			if (error) {
// 				alert("Email or password does not match records");
// 				setLoginError(true);
// 			}
// 		})
// 		.then((response) => {
// 			// console.log(userAccount)
// 			console.log(response.data);
// 			props.setCurrentUser(response.data.email);
// 			props.setCurrentUserID(response.data.id);
// 			// props.setCurrentCartID(response.data.id)
// 			props.setView("main");
// 		});
// };

// // returning user login
// const handleUpdateUser = (userAccount) => {
// 	axios
// 		// .put(localLoginUrl, userAccount)
// 		.put(herokuLoginUrl, userAccount)
// 		.catch((error) => {
// 			if (error) {
// 				alert("Email or password does not match records");
// 				setLoginError(true);
// 			}
// 		})
// 		.then((response) => {
// 			// console.log(userAccount)
// 			console.log(response.data);
// 			props.setCurrentUser(response.data.email);
// 			props.setCurrentUserID(response.data.id);
// 			// props.setCurrentCartID(response.data.id)
// 			props.setView("main");
// 		});
// };

import React from "react";

export default function Navbar() {
	return <div>Navbar</div>;
}
