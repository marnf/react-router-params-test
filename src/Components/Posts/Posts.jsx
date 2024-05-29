import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();
   

    return (
        <div>
            <h2>this is the posts page</h2>
            <h2>quantity = {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post
                    key={post.id}
                    post= {post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;