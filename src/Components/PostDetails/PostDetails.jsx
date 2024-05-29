import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData();
    const {id, title}= post;
    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1);
    }

    return (
        <div>
            <h3>id:{id}</h3>
            <p>{title}</p>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetails;