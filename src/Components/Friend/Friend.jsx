import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,phone,username,email,id} = friend;
    return (
        <div className='flex flex-col items-center bg-blue-300 border rounded-xl p-4'>
            <h1>name: {name}</h1>
            <p>Phone : {phone}</p>
            <p>User Name : {username}</p>
            <p>Email : {email}</p>
            <button className='px-4 py-2 bg-yellow-300 rounded'><Link to={`/profile/${id}`}>Profile</Link></button>
        </div>
    );
};

export default Friend;