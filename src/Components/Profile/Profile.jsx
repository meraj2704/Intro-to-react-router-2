import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Profile = () => {
    const proDetails = useLoaderData();
    // console.log(proDetails)
    const back = useNavigate();
    const goBack = ()=>{
        back(-1);
    }

    const {name, id, email, phone} = proDetails
    const {city, street} = proDetails.address
    return (
        <div className='flex justify-center mt-10'>
            {/* in this div we show everything about friens profile */}
            <div className=' bg-red-100 p-5 rounded'>
            <h1 className='text-center text-xl font-bold mb-4'>{name}</h1>
            <p>Email  : {email}</p>
            <p>Phone  : {phone}</p>
            <p>City   : {city}</p>
            <p>Street : {street}</p>
            <button onClick={goBack}>Go Back</button>
            </div>

        </div>
    );
};

export default Profile;