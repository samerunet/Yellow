import "./App.css";
import AppGateway from "./AppGateway.js";



function App() {
	

	// // FETCH - USERS
	// const getUsers = () => {
	// 	axios.get(`${API}/users`).then((response) =>
	// 		// console.log(response.data),
	// 		setUsers(response.data)
	// 	);
	// };
	// // FETCH - POSTS
	// const getPosts = () => {
	// 	axios.get(`${API}/post`).then((response) => setPost(response.data));
	// };
	// // FETCH - COMMENTS
	// const getComments = () => {
	// 	axios.get(`${API}/comments`).then((response) => setComment(response.data));
	// };

	// const [pageFunction, setPageFunction] = useState(true);

	// const pageToggle = () => {
	// 	pageFunction ? setPageFunction(false) : setPageFunction(true);
	// };

	// const handleLogin = (username, password) => {
	// 	axios
	// 		.put(`${API}/users/login`, {
	// 			username: username,
	// 			password: password,
	// 		})
	// 		.catch((error) => {
	// 			if (error) {
	// 				alert("Email or password does not match records");
	// 			}
	// 		})
	// 		.then((response) => {
	// 			setUser(response.data);
	// 			console.log(response.data);
	// 			if (Object.keys(response.data).length === 0) {
	// 				console.log("something went wrong");
	// 			} else {
	// 				pageToggle();
	// 			}
	// 		});
	// };

	// const handleCreateNewUser = (addUser) => {
	// 	axios.post(`${API}/users`, addUser).then((response) => {
	// 		setUsers([...users, response.data]);
	// 	});
	// };

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

	// useEffect(() => {
	// 	getUsers();
	// 	getPosts();
	// 	getComments();
	// }, []);

	return (
		<AppGateway />
	);
}

export default App;
