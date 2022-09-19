import axios from 'axios'
import react from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'




export default function Comment ({API, user, post, comments}) {

const navigate = useNavigate()

const [comment_body, setCommentBody] = useState("")

const handleNewCommment = (event) => {
    setCommentBody(event.target.value)
}

const newComment = () => {
    let obj= {
        post: post.id, 
        commenter_name: user.id, 
        comment_body: comment_body, 
       
    
    }
 
   
    axios.post(`${API}/comments`, obj). then((response) => {
        navigate("/")
    })


}

    return (
        <>
         <form onSubmit={(event)=>{
            event.preventDefault()
            newComment()}}>

                 <input onChange={handleNewCommment}type="text" value={comment_body}>
                 </input>
                 <button className="bg-lime-500 inline-block px-5 py-3 ml-3 text-sm font-lg  rounded-lg'"type="submit"> 
                 Comment</button>
            </form>
         

        </>


)


}