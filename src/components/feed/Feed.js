import React from "react";
import Comment from "./Comment.js";
import axios from "axios";
import { useState } from "react";

export default function Feed({
	post,
	API,
	users,
	comments,
	setPost,
	username,
	setComment,
}) {
	console.log("users ", users);
	console.log("post ", post);
	console.log("comments ", comments);

	// to get the users map through the users and map through the post
	// create a new array to push the users username to the post

	// array of object that will combine
	// post with all data then add the user as a key , then add another object depending on how many comments

	const DeleteButton = ({ user, postItem }) => {
		if (username.username === user.username) {
			return (
				<>
					<button
						onClick={() => {
							deletePost(postItem);
						}}
						value={postItem.id}
					>
						{" "}
						Delete
					</button>
				</>
			);
		} else {
			return <></>;
		}
	};

	const deletePost = (deletedPost) => {
		axios.delete(`${API}/post/` + deletedPost.id).then((response) => {
			setPost(post.filter((post) => post.id !== deletedPost.id));
		});
	};

	const editPost = (postItem) => {
		let obj = {
			id: postItem.postItem.id,
			author: postItem.postItem.author,
			title: postItem.editTitle,
			image: postItem.postItem.image,
			description: postItem.editDescription,
			likes: postItem.postItem.likes,
		};
		console.log(obj);
		debugger;

		axios.put(`${API}/post/${postItem.postItem.id}`, obj).then((response) => {
			// setPost(
			// 	post.map((post) => {
			// 		return post.id !== postItem.id ? post : postItem;
			// 	})
			// );
			return;
		});
	};

	const EditForm = (
		//
		{ user, postItem }
	) => {
		const [editTitle, setEditTitle] = useState("");
		const [editDescription, setEditDescription] = useState("");

		const handleEditTitle = (event) => {
			setEditTitle(event.target.value);
		};

		const handleEditDescription = (event) => {
			setEditDescription(event.target.value);
		};
		if (username.username === user.username) {
			return (
				<>
					<input
						type='text'
						name='title'
						placeholder={postItem.title}
						onChange={handleEditTitle}
					/>
					<br />
					<br />
					<input
						type='text'
						name='description'
						placeholder={postItem.description}
						onChange={handleEditDescription}
					/>
					<button
						onClick={() => {
							editPost({
								editTitle,
								editDescription,

								postItem,
							});
						}}
						className='bg-lime-500 inline-block px-5 py-3 ml-3 text-sm font-lg  rounded-lg'
					>
						Edit
					</button>
				</>
			);
		} else {
			return <></>;
		}
	};

	const handleDelete = (deletedComment) => {
		axios.delete(`${API}/comments/` + deletedComment.id).then((response) => {
			// just deleting comment with the same if as done with the filter
			setComment(
				comments.filter((comments) => comments.id !== deletedComment.id)
			);
		});
	};

	const Deletecomment = ({ comment, user }) => {
		if (comment.commenter_name === user.id) {
			return (
				<>
					<button
						className='bg-lime-500 inline-block px-5 py-3 ml-3 text-sm font-lg  rounded-lg'
						onClick={() => {
							handleDelete(comment);
						}}
						value={comment.id}
					>
						delete
					</button>
				</>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6 container-post rounded-xl '>
			<div className='grid gap-12 md:grid-cols-2 border-post '>
				{post.map((postItem) => {
					const postId = postItem.id;
					//user
					const authorId = postItem.author;
					let user = users.filter((user) => {
						if (user.id === authorId) {
							return true;
						} else {
							return false;
						}
					});
					user = user[0];
					const allPostComments = comments.filter((comment) => {
						if (comment.post === postId) {
							return true;
						} else {
							return false;
						}
					});
					return (
						<div class='px-5 py-4 bg-white dark:bg-white-800 shadow rounded-lg max-w-lg'>
							<EditForm user={user} postItem={postItem} />
							<DeleteButton user={user} postItem={postItem} />
							<p className='text-sm font-medium text-gray-900 truncate dark:text-black user-name'>
								{user.username}
							</p>
							<svg
								className='w-6 h-6 edit-icon'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
								></path>
							</svg>
							<img
								src='https://media.architecturaldigest.com/photos/58f918044f42bd463db36a3f/4:3/w_2663,h_1997,c_limit/1%20-%2010%20Greenest%20Cities%20in%20America%20in%202017.jpg'
								alt='art cover'
								loading='lazy'
								Width='1000'
								height='667'
								className='h-64 w-full object-cover object-top  '
							/>
							<div className='space-y-2'>
								<div className='space-y-4'>
									<h4 className='text-2xl font-semibold text-gray-700'>
										{postItem.title}
									</h4>
									<p className='text-gray-600'>{postItem.description}</p>
								</div>
							</div>
							<svg
								className='w-6 h-6 comment-btn'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
								></path>
							</svg>
							<svg
								className='w-6 h-6 like-btn'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
								></path>
							</svg>
							<p> {postItem.likes}</p>
							{allPostComments.length ? (
								<div>
									{allPostComments.map((comment) => {
										console.log(comment.commenter_name);
										const authorId = comment.commenter_name;
										let commenter = users.filter((user) => {
											if (user.id === authorId) {
												return true;
											} else {
												return false;
											}
										});
										console.log(commenter);
										return (
											<p>
												{commenter[0].username}
												<br />
												{comment.comment_body}
												<Deletecomment comment={comment} user={user} />
											</p>
										);
									})}
								</div>
							) : (
								<div>No comments currently...</div>
							)}
							<Comment
								API={API}
								user={user}
								post={postItem}
								comments={comments}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
