import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,phone,username,email,id} = friend;
    return (
        <div className='flex flex-col items-center bg-blue-300 border rounded-xl p-4'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <p>User Name : {username}</p>
            {/* by the below button we add profile link. Means if we click on button then we go for profile */}
            <button className='px-4 py-2 bg-yellow-300 rounded'><Link to={`/profile/${id}`}>Profile</Link></button>
        </div>
    );
};

export default Friend;