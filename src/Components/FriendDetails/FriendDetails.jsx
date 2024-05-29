import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friendDetailData = useLoaderData();
    
    const {name, phone , username, email}= friendDetailData;


    return (
        <div>
            <h3>name:{name}</h3>
            <p>phone:{phone}</p>
            <h3>email:{email}</h3>
        </div>
    );
};

export default FriendDetails;