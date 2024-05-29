import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const { id, title, body}= post;
    const navigate = useNavigate()

    const handleOfUseNavigate = ()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
           
           <p>{id}</p>
            <h3>title:{title}</h3>
            <p>body:{body}</p>
             <Link to ={`/post/${id}`}>see post details</Link>
             <button onClick={handleOfUseNavigate}>see details</button>
             
        </div>
    );
};

export default Post;