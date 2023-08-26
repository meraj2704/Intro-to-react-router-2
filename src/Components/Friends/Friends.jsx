import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends[0]);
    
    return (
        <div>
            <h1>Friends : {friends.length}</h1>
            {/* this function go for friend div */}
            <div className='md:grid md:grid-cols-3 mx-5 gap-4'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;