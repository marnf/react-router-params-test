import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

   
    const {name,id, username, email, phone} = friend

    return (
        <div className='friend'>
            <p>id:{id}</p>
            <h4>name:{name}</h4>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link to={`/friend/${id}`}>friend details</Link>
        </div>
    );
};

export default Friend;